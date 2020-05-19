import React from "react";
import styled from "styled-components";
import ListContainer from "../../components/listContainer";
import TagsView from "../../components/tagsView";
import TrackView from "../../components/trackView";
import { searchResultsStore, selectedTracksStore } from "../../store";
import { useRecoilValue, useRecoilState } from "recoil";

export default function Home() {
  const searchResultsState = useRecoilValue(searchResultsStore);
  const [selectedTracks, setSelectedTracks] = useRecoilState(
    selectedTracksStore
  );

  const handleClick = (id) => {
    selectedTracks.findIndex((i) => i === id) > -1
      ? setSelectedTracks(selectedTracks.filter((x) => x !== id))
      : setSelectedTracks([...selectedTracks, id]);
  };

  return (
    <Container>
      <ListContainer>
        {searchResultsState.map((x) => (
          <TrackView
            key={x.id}
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
