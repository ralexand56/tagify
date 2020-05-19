import { atom } from "recoil";

export const todoStore = atom({
  key: "todoStore",
  default: {
    ids: ["1", "2"],
    items: {
      "1": { name: "Todo Item 1", isComplete: false },
      "2": { name: "Todo Item 2", isComplete: false },
    },
  },
});

export const tagsStore = atom({
  key: "tagsStore",
  default: {
    ids: [],
    items: {},
  },
});

export const loginStore = atom({
  key: "login",
  default: {
    id: null,
    accessToken: null,
    refreshToken: null,
    username: "Not Logged In",
    imageSrc: null,
  },
});

export const searchResultsStore = atom({
  key: "searchResults",
  default: [],
});

export const selectedTagsStore = atom({
  key: "selectedTags",
  default: [],
});

export const selectedTracksStore = atom({
  key: "selectedTracks",
  default: [],
});

export const searchTermStore = atom({
  key: "searchTerm",
  default: "",
});
