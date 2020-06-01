import React from "react";
import styled from "styled-components";
import ListContainer from "../../components/listView";
import TagsView from "../../components/tagsView";
import TrackView from "../../components/trackView";
import { searchResultsState, selectedTracksState } from "../../store";
import { useRecoilValue, useRecoilState } from "recoil";
import PlaylistsView from "../../components/playlistsView";
import { Playlist } from "../../spotify-functions";
import PlaylistView from "../../components/playlistView";

interface Props {
  playlists: Playlist[];
}

export default function Home({ playlists }: Props) {
  const searchResults = useRecoilValue<SpotifyApi.TrackObjectFull[]>(
    searchResultsState
  );
  const [selectedTracks, setSelectedTracks] = useRecoilState<string[]>(
    selectedTracksState
  );

  const handleClick = (id: string) => {
    selectedTracks.findIndex((i) => i === id) > -1
      ? setSelectedTracks(selectedTracks.filter((x) => x !== id))
      : setSelectedTracks([...selectedTracks, id]);
  };

  return (
    <Container>
      <ListContainer title={`Tracks - ${searchResults.length}`}>
        {searchResults.map((x) => (
          <TrackView
            key={x.uri}
            track={x}
            handleClick={handleClick}
            isSelected={selectedTracks.findIndex((id) => id === x.uri) > -1}
          />
        ))}
      </ListContainer>
      <PlaylistsView>
        {playlists.map((p) => (
          <PlaylistView key={p.id} playlist={p} />
        ))}
      </PlaylistsView>
      <TagsView />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
`;
