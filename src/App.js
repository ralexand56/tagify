import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/header";
import { Route, Routes, useParams } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { loginStore, searchResultsStore } from "./store";
import Spotify from "spotify-web-api-js";
import TrackView from "./components/trackView";
import ListContainer from "./components/listContainer";

function App() {
  return (
    <AppContainer>
      <Header />
      <RouteContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/:refresh" element={<Home />} />
        </Routes>
      </RouteContainer>
    </AppContainer>
  );
}

function Home() {
  const { id, refresh } = useParams();
  const setLoginState = useSetRecoilState(loginStore);
  const searchResultsState = useRecoilValue(searchResultsStore);

  React.useEffect(() => {
    const setLogin = async () => {
      const spotify = new Spotify();

      spotify.setAccessToken(id);
      const user = await spotify.getMe();

      setLoginState({
        accessToken: id,
        refreshToken: refresh,
        username: user.display_name,
        imageSrc: user.images[0].url,
      });
    };

    if (id) {
      setLogin();
    }
  });

  return (
    <ListContainer>
      <>
        {searchResultsState.map((x) => (
          <TrackView key={x.id} {...x} />
        ))}
      </>
    </ListContainer>
  );
}

const AppContainer = styled.main`
  display: grid;
  background-color: #e2deea;
  grid-template-rows: auto 1fr;
  gap: 1em;
  grid-template-areas:
    "header"
    "main";
  height: 100vh;
`;

const RouteContainer = styled.main`
  display: flex;
  grid-area: main;
  margin: 1.5em;
  border: solid 0px;
`;

// function TextInput() {
//   const textState = atom({
//     key: "textInput",
//     default: "Hey You",
//   });

//   const [val, setValue] = useRecoilState(textState);
//   const charCountState = selector({
//     key: "charCountState",
//     get: ({ get }) => get(textState).length,
//   });

//   const cnt = useRecoilValue(charCountState);

//   const onChange = (e) => setValue(e.target.value);
//   return (
//     <div>
//       <input value={val} onChange={onChange} type="text" />
//       <div>Echo: {cnt}</div>
//     </div>
//   );
// }

export default App;
