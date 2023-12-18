import { atom } from "recoil";

export const inputCodeState = atom({
  key: 'inputCodeState',
  default: '',
});

export const linedInputCodeState = atom<string[]>({
  key: 'linedInputCodeState',
  default: [],
})