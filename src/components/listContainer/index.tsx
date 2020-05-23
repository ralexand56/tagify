import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import VolumeControl from "../volumeControl";

interface Props {
  title: string;
  header?: React.ReactElement;
  footer?: React.ReactElement;
}

export default function ListView({
  title = "",
  children,
  header,
}: PropsWithChildren<Props>) {
  return (
    <Container>
      <Header>
        {header ?
          header
          : <span>{title}</span>
        }
        <VolumeControl />
      </Header>
      <ListContainer>{children}</ListContainer>
    </Container>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.2em;
  color: #9680a4;
  padding: 0.5em;
  min-width: 425px;
  border-bottom: solid 1px;
`;

const Container = styled.section`
  border-radius: 0.5em;
  background-color: hsl(261, 18%, 38%);
  padding: 0.5em 0em;
  filter: drop-shadow(2px 3px 3px #9680a4);
`;

const ListContainer = styled.ul`
  overflow-y: auto;
  li {
    background-color: hsl(261, 18%, 38%);
  }
  li:nth-child(odd) {
    background-color: hsl(261, 18%, 36%);
  }
`;
