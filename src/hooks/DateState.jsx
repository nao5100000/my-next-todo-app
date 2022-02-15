import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import moment from "moment";
const { persistAtom } = recoilPersist();

export const dateState = atom({
  key: "date",
  default: moment().format("YYYYMMDDHHmmss"),
  effects_UNSTABLE: [persistAtom],
});
