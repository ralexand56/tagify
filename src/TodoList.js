//@ts-check

import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { todoList } from "./selectors";
import { todoStore } from "./store";

export default function TodoList() {
  const todos = useRecoilValue(todoList);
  const setTodoStore = useSetRecoilState(todoStore);

  const addTodo = () => {
    setTodoStore((oldStore) => {
      const { ids } = oldStore;
      const nextId = `${todos.length + 1}`;
      const newItem = { name: `Todo Item ${nextId}`, isComplete: false };
      const idList = [...ids, nextId];
      const items = { ...oldStore.items, [nextId]: newItem };

      return { ids: idList, items };
    });
  };

  /**
   *
   * @param {string} id
   */
  const handleDelete = (id) => {
    setTodoStore((oldStore) => {
      const { ids } = oldStore;
      const idList = ids.filter((i) => i !== id);
      const newItems = idList.reduce(
        (acc, curr) => ({
          ...acc,
          [curr]: oldStore.items[curr],
        }),
        {}
      );

      return { ids: idList, items: newItems };
    });
  };

  const handleMarkComplete = (id, evt) => {
    setTodoStore((oldStore) => {
      const completed = {
        ...oldStore.items,
        [id]: { ...oldStore.items[id], isComplete: evt.target.checked },
      };

      return {
        ...oldStore,
        items: completed,
      };
    });
  };

  return (
    <>
      <ul>
        {todos.map((t) => (
          <li
            style={{ textDecoration: t.isComplete ? "line-through" : "none" }}
            key={t.id}
          >
            {t.name}
            <input
              onChange={(e) => handleMarkComplete(t.id, e)}
              checked={t.isComplete}
              type="checkbox"
            />
            <button onClick={() => handleDelete(t.id)}>del</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={addTodo}>Add</button>
      </div>
    </>
  );
}
