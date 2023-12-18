import { atom } from "recoil";

// interfaces
import { ICheckResults } from "../interfaces/check";

export const checkResultState = atom<ICheckResults>({
  key: 'checkResultState',
  default: {},
});
