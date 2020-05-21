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
} from "../../store";
import TagView from "../tagView";
import { Login, TrackTag, TagStore } from "../../spotify-functions";

export default function TagsView() {
  const [newTagName, setNewTagName] = React.useState("");
  const [selectedTags, setSelectedTags] = useRecoilState<string[]>(selectedTagsState);
  const selectedTracks = useRecoilValue<string[]>(selectedTracksState);
  const tags = useRecoilValue<TagStore>(tagsState);
  const tagList = useRecoilValue<TrackTag[]>(tagsList);
  const login = useRecoilValue<Login>(loginState);

  const addTag = (name: string) => {
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
  
  const handleClick = (id: string) => {
    selectedTags.findIndex((i) => i === id) > -1
      ? setSelectedTags(selectedTags.filter((x) => x !== id))
      : setSelectedTags([...selectedTags, id]);
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
      <input
        type="text"
        value={newTagName}
        onChange={handleNewTagNameChange}
        onKeyDown={(e) =>
          (e.which === 13 || e.keyCode === 13) && addTag(e.currentTarget.value)
        }
        placeholder="add tag..."
      />
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
      <Button onClick={handleAddSelectedTag}>Add Tag to Song</Button>
    </Container>
  );
}

const Button = styled.button`
  padding: 0.3em 0.5em;
`;

const Container = styled.section`
  display: flex;
  align-items: flex-start;
`;
