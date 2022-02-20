import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const todoState = atom({
  key: "todo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
