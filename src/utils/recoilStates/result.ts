// libraries
import { atom } from "recoil"

// interfaces
import { ICheckResults } from "../interfaces/check"

export const checkResultState = atom<ICheckResults>({
  key: "checkResultState",
  default: {},
})

export const aiResultState = atom({
  key: "aiResultState",
  default: ""
})

export const aiResultLinedCodeState = atom<string[]>({
  key: "aiResultLinedCodeState",
  default: []
})