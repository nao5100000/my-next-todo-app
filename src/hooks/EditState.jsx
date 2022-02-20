import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const editState = atom({
  key: "edit",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
