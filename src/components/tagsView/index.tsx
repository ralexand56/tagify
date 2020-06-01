import React from "react";
import styled from "styled-components";
import { useRecoilValue, useRecoilState } from "recoil";
import { tagsList } from "../../selectors";
import { db } from "../../firebase";
import {
  loginState,
  selectedTagsState,
  selectedTracksState,
  tagsState,
  tagTracksState,
} from "../../store";
import TagView from "../tagView";
import {
  Login,
  TrackTag,
  TagStore,
  TagTracksStore,
  getTagByID,
  getTrackURIsByTags,
  getTracksByURIs,
  Track,
} from "../../spotify-functions";
import SpotifyWebApi from "spotify-web-api-js";
import ListView from "../listView";
import TrackView from "../trackView";
import Button from "../shared/Button";
import { CustomInput } from "../shared/Input";

export default function TagsView() {
  const [newTagName, setNewTagName] = React.useState("");
  const [selectedTags, setSelectedTags] = useRecoilState<string[]>(
    selectedTagsState
  );
  const selectedTracks = useRecoilValue<string[]>(selectedTracksState);
  const [tagTracks, setTagTracks] = useRecoilState<TagTracksStore>(
    tagTracksState
  );
  const tags = useRecoilValue<TagStore>(tagsState);
  const tagList = useRecoilValue<TrackTag[]>(tagsList);
  const login = useRecoilValue<Login>(loginState);

  const addTag = (name: string | null) => {

    if (login.id) {
      db.collection("tags").add({
        isActive: true,
        name,
        uris: [],
        userid: login.id,
      });

      setNewTagName("");
    }
  };

  const handleNewTagNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTagName(e.currentTarget.value);

  const handleClick = async (id: string) => {
    let newSelectedTags = [];

    if (selectedTags.findIndex((i) => i === id) > -1) {
      newSelectedTags = selectedTags.filter((x) => x !== id);
    } else {
      newSelectedTags = [...selectedTags, id];
    }

    setSelectedTags(newSelectedTags);

    const newTags = newSelectedTags.map((t) => getTagByID(t, tags.items));

    const ids = getTrackURIsByTags(newTags).map((t) =>
      t.replace("spotify:track:", "")
    );

    if (login.accessToken) {
      let newItems: Record<string, SpotifyApi.TrackObjectFull> = {};

      if (ids.length) {
        const spotTracks = await getTracksByURIs(
          ids,
          new SpotifyWebApi(),
          login.accessToken
        );

        if (spotTracks) {
          spotTracks.forEach((x) => (newItems[x.uri] = x));
          setTagTracks({ ids: spotTracks.map((s) => s.uri), items: newItems });
        }
      } else {
        setTagTracks({ ids: [], items: {} });
      }
    }
  };

  const handleAddSelectedTag = () => {
    let items = { ...tags.items };

    for (let uri of selectedTracks) {
      for (let tagId of selectedTags) {
        const tag = items[tagId];

        if (tag.uris.findIndex((x) => x === uri) === -1) {
          const { id, ...rest } = tag;
          items[tagId] = { ...rest, uris: [...rest.uris, uri] };
        }
      }
    }

    for (let tagId of selectedTags) {
      db.collection("tags").doc(tagId).set(items[tagId]);
    }
  };

  return (
    <Container>
      <CustomInput
        defaultValue={newTagName}
        onChange={handleNewTagNameChange}
        onKeyDown={(e) => {
          (e.which === 13 || e.keyCode === 13) &&
            addTag(newTagName);
        }}
        label="add tag..."
      />
      <ItemContainer>
        {tagList.map((t) => (
          <TagView
            tag={t}
            key={t.id}
            isSelected={selectedTags.findIndex((id) => id === t.id) > -1}
            handleClick={handleClick}
          >
            {t.name}
          </TagView>
        ))}
      </ItemContainer>
      <Button icon="plus" onClick={handleAddSelectedTag}>
        Add Tag to Song
      </Button>
      <TrackListContainer
        style={{ display: tagTracks.ids.length ? "block" : "none" }}
      >
        <ListView title={`Selected Tags Tracks ${tagTracks.ids.length}`}>
          {tagTracks.ids
            .map((t) => tagTracks.items[t])
            .map((x) => (
              <TrackView key={x.uri} track={x} isSelected={false} />
            ))}
        </ListView>
      </TrackListContainer>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  margin: 1em;
`;

const ItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const TrackListContainer = styled.section`
  position: fixed;
  right: 0;
  margin: 1em;
`;
