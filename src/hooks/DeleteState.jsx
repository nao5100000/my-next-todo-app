import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const deleteState = atom({
  key: "delete",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
