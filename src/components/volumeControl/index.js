import React from "react";
import styled from "styled-components";
import Spotify from "spotify-web-api-js";
import { useRecoilValue } from "recoil";
import { loginStore } from "../../store";

export default function VolumeControl() {
  const [volume, setVolume] = React.useState(100);
  const loginState = useRecoilValue(loginStore);
  // const navigate = useNavigate();

  const handleVolumeChange = async (e) => {
    try {
      const spotify = new Spotify();
      spotify.setAccessToken(loginState.accessToken);

      setVolume(e.target.value);

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
