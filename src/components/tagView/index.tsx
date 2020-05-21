import React, { ChangeEvent } from "react";
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
    border: solid 3px #9680a4;
  }
  :hover svg {
    opacity: 1;
    transform: scale(1);
  }

  :hover input {
    display: block;
  }

  :hover span {
    display: none;
  }
  transition: all 0.5s;
  box-shadow: 0 1.2px 2px rgba(0, 0, 0, 0.02),
    0 2.9px 4.9px rgba(0, 0, 0, 0.028), 0 5.4px 9.3px rgba(0, 0, 0, 0.035),
    0 9.6px 16.5px rgba(0, 0, 0, 0.042), 0 18px 30.9px rgba(0, 0, 0, 0.05),
    0 43px 74px rgba(0, 0, 0, 0.07);
`;
