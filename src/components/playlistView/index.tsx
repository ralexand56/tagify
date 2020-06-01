import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Playlist } from "../../spotify-functions";

interface Props {
  playlist: Playlist;
}

export default function PlaylistView({ playlist }: React.PropsWithChildren<Props>) {
  console.log(playlist);

  return (
    <Container>
      <Name>{playlist.name}</Name>
      <PlusContainer>
        <FontAwesomeIcon icon="plus" />
      </PlusContainer>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  border: solid 0px;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
`;

const Name = styled.section``;

const PlusContainer = styled.section`
    margin-left: .5em;
`;
