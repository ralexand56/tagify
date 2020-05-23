import { atom, RecoilState } from "recoil";
import { TagStore, Login, Track, TagTracksStore } from "./spotify-functions";

export const tagsState: RecoilState<TagStore> = atom<TagStore>({
  key: "tags",
  default: {
    ids: [],
    items: {},
  },
});

export const tagTracksState: RecoilState<TagTracksStore> = atom<TagTracksStore>(
  {
    key: "tagTracks",
    default: {
      ids: [],
      items: {},
    },
  }
);

export const loginState: RecoilState<Login> = atom<Login>({
  key: "login",
  default: {
    id: null,
    accessToken: null,
    refreshToken: null,
    username: "Not Logged In",
    imageSrc: null,
  },
});

export const searchResultsState: RecoilState<Track[]> = atom({
  key: "searchResults",
  default: [],
});

export const selectedTagsState: RecoilState<string[]> = atom({
  key: "selectedTags",
  default: [],
});

export const selectedTracksState: RecoilState<string[]> = atom<string[]>({
  key: "selectedTracks",
  default: [],
});

export const searchTermState: RecoilState<string> = atom({
  key: "searchTerm",
  default: "",
});
