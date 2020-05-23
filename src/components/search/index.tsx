import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { searchResultsState, searchTermState, loginState } from "../../store";
import Spotify from "spotify-web-api-js";
import { Login, getTracksBySearchTerm } from "../../spotify-functions";

export default function SearchView() {
  const [searchTerm, setSearchTermState] = useRecoilState<string>(
    searchTermState
  );
  const setSearchResults = useSetRecoilState(searchResultsState);
  const loginValue = useRecoilValue<Login>(loginState);

  const getTracks = async () => {
    if (loginValue.accessToken) {
      setSearchResults(
        await getTracksBySearchTerm(
          searchTerm,
          new Spotify(),
          loginValue.accessToken
        )
      );
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
  background-color: #a9bdbd;
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
  background-color: #9680a4;
  cursor: text;
  margin-right: 1.5em;
  font: 400 13.3333px Arial;
  padding: 1em;
  color: #e2deea;
  outline: none;
  border: none;
  :focus {
    border: none;
  }
`;
