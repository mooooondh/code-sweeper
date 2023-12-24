"use client"

// libraries
import { useRecoilState } from 'recoil'

// recoilStates
import { selectedAboutMenuState } from '@/utils/recoilStates/about'

// interfaces
import { IAboutMenus } from '@/utils/interfaces/about'

export const useAbout = () => {
  const [selectedAboutMenu, setSelectedAboutMenu] = useRecoilState(selectedAboutMenuState)

  const onClickAboutMenu = (selectedMenu: IAboutMenus) => {
    console.log("selectedMenu : ", selectedMenu)
    setSelectedAboutMenu(selectedMenu)
  }

  return {
    selectedAboutMenu,
    onClickAboutMenu
  }
}