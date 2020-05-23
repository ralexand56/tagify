import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../../firebase";
import { TrackTag } from "../../spotify-functions";

interface Props {
  tag: TrackTag;
  handleClick: (id: string) => void;
  isSelected: boolean;
}

export default function TagView({
  tag,
  handleClick,
  isSelected,
}: React.PropsWithChildren<Props>) {
  const handleInActivateTag = () => {
    db.collection("tags")
      .doc(tag.id)
      .set({ ...tag, isActive: false });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    db.collection("tags")
      .doc(tag.id)
      .set({ ...tag, name: e.target.value });
  };

  return (
    <Container
      className={isSelected ? "select" : ""}
      onClick={() => tag.id && handleClick(tag.id)}
    >
      <span>{tag.name}</span>
      <StyledInput value={tag.name} onChange={handleOnChange} />
      <Icon icon="times" onClick={handleInActivateTag} />
    </Container>
  );
}

const Icon = styled(FontAwesomeIcon)`
  display: none;
  margin: 0 0.3em;
  opacity: 0;
  transform: scale(0);
  :hover {
    cursor: pointer;
  }
  transition: all 0.5s;
`;

const StyledInput = styled.input`
  display: none;
`;

const Container = styled.li`
  display: flex;
  align-items: center;
  color: white;
  margin: 0.2em;
  background-color: #5d5174;
  border-radius: 1em;
  padding: 0.3em 1em;
  white-space: nowrap;
  &.select {
    /* border: solid 3px #9680a4; */
    filter: drop-shadow(0px 0px 0px #9680a4);
  }

  :hover {
    cursor: pointer;
  }
  /* :hover svg {
    opacity: 1;
    transform: scale(1);
  } */

  /* :hover input {
    display: block;
  } */

  /* :hover span {
    display: none;
  } */
  transition: all 0.3s;
  filter: drop-shadow(2px 3px 3px #9680a4);
  /* box-shadow: 0 0px 1.1px rgba(0, 0, 0, 0.02), 0 0px 2.5px rgba(0, 0, 0, 0.028),
    0 0px 4.8px rgba(0, 0, 0, 0.035), 0 0px 8.5px rgba(0, 0, 0, 0.042),
    0 0px 15.9px rgba(0, 0, 0, 0.05), 0 0px 38px rgba(0, 0, 0, 0.07); */
`;
