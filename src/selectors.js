import { selector } from "recoil";
import { tagsStore, todoStore } from "./store";

export const getList = (store) => ({ get }) =>
  get(store).ids.map((i) => ({ ...get(store).items[i], id: i }));

export const todoList = selector({
  key: "todos",
  get: ({ get }) => {
    const store = get(todoStore);

    return store.ids.map((i) => ({ ...store.items[i], id: i }));
  },
});

export const tagsList = selector({
  key: "tags",
  get: ({ get }) => {
    const store = get(tagsStore);

    return store.ids
      .map((id) => ({ ...store.items[id], id }))
      .filter((x) => x.isActive);
  },
});
