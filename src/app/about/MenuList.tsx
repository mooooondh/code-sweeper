"use client"

// hooks
import { useAbout } from "@/hooks/useAbout"

// datas
import { aboutMenu } from "@/utils/datas/about"

// utils
import aboutMenuTranslator from "@/utils/translator/aboutMenuTranslator.json"

const MenuList = () => {
  const { selectedAboutMenu, onClickAboutMenu } = useAbout()

  return (
    <div className="flex flex-col py-4 w-1/6 h-full bg-gray-600 border-r-2">
      {
        aboutMenu.map((menu, idx) =>
          <button
            key={idx}
            className={`flex px-4 py-2 w-full hover:bg-slate-800 ${selectedAboutMenu === menu && "bg-slate-800"}`}
            onClick={() => onClickAboutMenu(menu)}
          >
            <p>{aboutMenuTranslator[menu]}</p>
          </button>
        )
      }
    </div>
  )
}

export default MenuList