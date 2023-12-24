// libraries
import { atom } from "recoil"

// interfaces
import { IAboutMenus } from "../interfaces/about"

export const selectedAboutMenuState = atom<IAboutMenus>({
  key: "selectedAboutMenuState",
  default: "about",
})