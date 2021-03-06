import { selector } from "recoil";
import { tagsState } from "./store";
import { TrackTag, TagStore } from "./spotify-functions";
// import { GetRecoilValue, ReadOnlySelectorOptions } from "recoil/lib/core/selector";

// export const getList = (store: TagStore) => ({ get }: ReadOnlySelectorOptions<TrackTag[]>) =>
//   get(store).ids.map((i) => ({ ...get(store).items[i], id: i }));

export const tagsList = selector<TrackTag[]>({
  key: "tagArray",
  get: ({ get }) => {
    const store: TagStore = get(tagsState);

    return store.ids
      .map((id) => ({ ...store.items[id], id }))
      .filter((x) => x.isActive);
  },
});
