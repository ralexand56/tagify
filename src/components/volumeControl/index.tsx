import React from "react";
import styled from "styled-components";
import Spotify from "spotify-web-api-js";
import { useRecoilValue } from "recoil";
import { loginState } from "../../store";
import { Login } from "../../spotify-functions";

export default function VolumeControl() {
  const [volume, setVolume] = React.useState(100);
  const login = useRecoilValue<Login>(loginState);
  // const navigate = useNavigate();

  const handleVolumeChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const spotify = new Spotify();
      spotify.setAccessToken(login.accessToken);

      setVolume(parseInt(e.currentTarget.value));

      const devices = (await spotify.getMyDevices()).devices;

      if (devices.length && devices[0].is_active) {
        spotify.setVolume(volume);
      }
    } catch (error) {
      console.log(error);
      // global.window &&
      //   (global.window.location.href = "http://localhost:8888/refesh_token");
    }
  };

  return (
    <Container>
      <StyleSlider value={volume} onChange={handleVolumeChange} type="range" />
      <span>{volume}</span>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
`;

const StyleSlider = styled.input`
  width: 100%;
  height: 1.4rem;
  padding: 0;
  background-color: transparent;
  appearance: none;
`;
