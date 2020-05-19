import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/header";
import { Route, Routes, useParams, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loginStore, tagsStore } from "./store";
import Spotify from "spotify-web-api-js";
import { db } from "./firebase";
import TagsView from "./components/tagsView";
import Home from "./pages/home";

function App() {
  const setTags = useSetRecoilState(tagsStore);

  React.useEffect(() => {
    db.collection("tags").onSnapshot((data) => {
      let items = {};
      const ids = data.docs.map((x) => x.id);
      data.docs.map((x) => (items[x.id] = x.data()));

      setTags({ ids, items });
    });
  }, [setTags]);

  return (
    <AppContainer>
      <Header />
      <RouteContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id/:refresh" element={<Redirect />} />
          <Route path="/tags" element={<TagsView />} />
        </Routes>
      </RouteContainer>
    </AppContainer>
  );
}

function Redirect() {
  const { id, refresh } = useParams();
  const setLoginState = useSetRecoilState(loginStore);
  const navigate = useNavigate();

  React.useEffect(() => {
    const setLogin = async () => {
      const spotify = new Spotify();

      spotify.setAccessToken(id);
      const user = await spotify.getMe();

      setLoginState({
        id: user.id,
        accessToken: id,
        refreshToken: refresh,
        username: user.display_name,
        imageSrc: user.images[0].url,
      });

      navigate("/");
    };

    if (id) {
      setLogin();
    }
  });

  return null;
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

export default App;
