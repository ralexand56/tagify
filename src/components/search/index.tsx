import React from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { searchResultsState, searchTermState, loginState } from "../../store";
import Spotify from "spotify-web-api-js";
import {
  Login,
  getTracksBySearchTerm,
  refreshToken,
} from "../../spotify-functions";

export default function SearchView() {
  const [searchTerm, setSearchTermState] = useRecoilState<string>(
    searchTermState
  );
  const setSearchResults = useSetRecoilState(searchResultsState);
  const [login, setLogin] = useRecoilState<Login>(loginState);

  const getTracks = async () => {
    try {
      if (login.accessToken) {
        // setSearchResults(
        //   await getTracksBySearchTerm(
        //     searchTerm,
        //     new Spotify(),
        //     login.accessToken
        //   )
        // );
      }
    } catch (error) {
      console.log(JSON.parse(error.response).error.message);

      if (login.refreshToken) {
        const access_token = (await refreshToken(login.refreshToken))
          .access_token;
        setLogin((oldLogin) => ({
          ...oldLogin,
          access_token,
        }));

        // setSearchResults(
        //   await getTracksBySearchTerm(searchTerm, new Spotify(), access_token)
        // );
      }
    }
  };

  return (
    <Container>
      <SearchInput
        onChange={(e) => setSearchTermState(e.target.value)}
        onKeyDown={(e) => (e.which === 13 || e.keyCode === 13) && getTracks()}
        value={searchTerm}
        placeholder="search..."
      />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
`;

const SearchInput = styled.input`
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: ${(props) => props.theme.colors.light};
  background-clip: padding-box;
  border-radius: 1rem;
  margin-right: 1em;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: textfield;
  cursor: text;
  margin-right: 1.5em;
  font: 400 13.3333px Arial;
  padding: 1em;
  color: ${(props) => props.theme.colors.dark};
  outline: none;
  border: none;
  :focus {
    border: none;
  }
`;
