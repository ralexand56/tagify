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

export const loginStore = atom({
  key: "login",
  default: {
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

export const searchTermStore = atom({
  key: "searchTerm",
  default:  ""
});
