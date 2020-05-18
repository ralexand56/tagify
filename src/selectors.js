import { selector } from "recoil";
import { todoStore } from "./store";

export const todoList = selector({
  key: "todos",
  get: ({ get }) => {
    const store = get(todoStore);

    return store.ids.map((i) => ({ ...store.items[i], id: i }));
  },
});
