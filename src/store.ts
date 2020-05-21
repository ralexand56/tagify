import { atom, RecoilState } from "recoil";
import { TagStore, Login } from "./spotify-functions";

export const tagsStore: RecoilState<TagStore> = atom({
  key: "tagsStore",
  default: {
    ids: [],
    items: {},
  },
});

export const loginStore: RecoilState<Login> = atom<Login>({
  key: "login",
  default: {
    id: null,
    accessToken: null,
    refreshToken: null,
    username: "Not Logged In",
    imageSrc: null,
  },
});

export const searchResultsStore: RecoilState<string[]> = atom({
  key: "searchResults",
  default: [],
});

export const selectedTagsStore: RecoilState<string[]> = atom({
  key: "selectedTags",
  default: [],
});

export const selectedTracksStore: RecoilState<string[]> = atom<string[]>({
  key: "selectedTracks",
  default: [],
});

export const searchTermStore: RecoilState<string> = atom({
  key: "searchTerm",
  default: "",
});
