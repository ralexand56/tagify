import React from "react";
import styled from "styled-components";
import ListContainer from "../../components/listContainer";
import TagsView from "../../components/tagsView";
import TrackView from "../../components/trackView";
import { searchResultsState, selectedTracksState } from "../../store";
import { useRecoilValue, useRecoilState } from "recoil";
import { Track } from "../../spotify-functions";

export default function Home() {
  const searchResults = useRecoilValue<Track[]>(searchResultsState);
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
      <TagsView />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
`;
