import React from "react";
import styled from "styled-components";
import Spotify from "spotify-web-api-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue } from "recoil";
import { loginState } from "../../store";
import { Track, Login } from "../../spotify-functions";

interface Props {
  track: Track;
  isSelected: boolean;
  handleClick?: (uri: string) => void;
}
export default function TrackView({ track, isSelected, handleClick }: Props) {
  const { name, album, artists, uri } = track;
  const login = useRecoilValue<Login>(loginState);

  const playSong = async (uri: string) => {
    const spotify = new Spotify();
    spotify.setAccessToken(login.accessToken);

    const devices = (await spotify.getMyDevices()).devices;

    if (devices.length && devices[0].is_active) {
      spotify.play({ uris: [uri] });
    }
  };

  const pauseSong = (uri: string) => {
    const spotify = new Spotify();
    spotify.setAccessToken(login.accessToken);

    spotify.pause();
  };

  return (
    <Container
      className={isSelected ? "select" : ""}
      onClick={() => handleClick && handleClick(uri)}
    >
      <Thumbnail style={{ backgroundImage: `url(${album.images[0].url})` }} />
      <Name>{name}</Name>
      <Artist>{artists[0].name}</Artist>
      <Action onClick={() => playSong(uri)}>
        <FontAwesomeIcon icon="play" />
      </Action>
      <Action2 onClick={() => pauseSong(uri)}>
        <FontAwesomeIcon icon="pause" />
      </Action2>
    </Container>
  );
}

const Container = styled.li`
  display: grid;
  border: solid 0px;
  color: #cdc5db;
  padding: 0.5em 0.5em;
  width: 200;
  transition: opacity 0.5s;
  &.select {
    opacity: 0.5;
  }
  :hover {
    cursor: pointer;
    filter: brightness(120%);
  }
  align-items: center;
  grid-template-columns: auto 1fr auto auto;
  grid-template-rows: 1fr 1fr;
  gap: 0 0.5em;
  grid-template-areas:
    "thumb  name  action action2"
    "thumb artist action action2";
`;

const Thumbnail = styled.section`
  display: flex;
  background-size: cover;
  grid-area: thumb;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 0.3em;
  box-shadow: 0 1.2px 2px rgba(0, 0, 0, 0.02),
    0 2.9px 4.9px rgba(0, 0, 0, 0.028), 0 5.4px 9.3px rgba(0, 0, 0, 0.035),
    0 9.6px 16.5px rgba(0, 0, 0, 0.042), 0 18px 30.9px rgba(0, 0, 0, 0.05),
    0 43px 74px rgba(0, 0, 0, 0.07);
`;

const Name = styled.section`
  display: flex;
  font-weight: 700;
  grid-area: name;
  justify-content: flex-start;
  align-items: center;
  border: solid 0px;
`;

const Artist = styled.section`
  display: flex;
  grid-area: artist;
  font-size: 0.8em;
  justify-content: flex-start;
  align-items: center;
`;

const Action = styled.button`
  display: flex;
  grid-area: action;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0.7em;
  box-shadow: 0 1.2px 2px rgba(0, 0, 0, 0.02),
    0 2.9px 4.9px rgba(0, 0, 0, 0.028), 0 5.4px 9.3px rgba(0, 0, 0, 0.035),
    0 9.6px 16.5px rgba(0, 0, 0, 0.042), 0 18px 30.9px rgba(0, 0, 0, 0.05),
    0 43px 74px rgba(0, 0, 0, 0.07);
`;

const Action2 = styled.button`
  display: flex;
  grid-area: action2;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0.7em;
  box-shadow: 0 1.2px 2px rgba(0, 0, 0, 0.02),
    0 2.9px 4.9px rgba(0, 0, 0, 0.028), 0 5.4px 9.3px rgba(0, 0, 0, 0.035),
    0 9.6px 16.5px rgba(0, 0, 0, 0.042), 0 18px 30.9px rgba(0, 0, 0, 0.05),
    0 43px 74px rgba(0, 0, 0, 0.07);
`;
