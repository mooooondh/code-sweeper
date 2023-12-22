// libraries
import { atom } from "recoil"

// interfaces
import { ILanguage } from "../interfaces/languages"

export const selectedLanguageState = atom<ILanguage>({
  key: 'selectedLanguageState',
  default: "javascript",
})

export const inputCodeState = atom({
  key: 'inputCodeState',
  default: '',
})

export const linedInputCodeState = atom<string[]>({
  key: 'linedInputCodeState',
  default: [],
})