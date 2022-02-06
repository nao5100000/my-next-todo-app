import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

import moment from "moment";

const { persistAtom } = recoilPersist();

export const todoState = atom({
  key: "todo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
