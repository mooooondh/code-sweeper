"use client"

// components
import { Spacer } from "@/components/basics/Spacer"
import { TitleButton } from "@/components/buttons/TitleButton"
import { ChangeLanguageDropdown } from "@/components/dropdowns/ChangeLanguageDropdown"

// hooks
import { useChecker } from "@/hooks/useChecker"

// datas
import { languageList } from "@/utils/datas/languages"

const Header = () => {
  const { selectedLanguage, updateLanguage } = useChecker()

  return (
    <div className="flex flex-row justify-between px-8 py-4 border-b-2 bg-gray-600">
      <TitleButton />

      <div className="flex flex-row items-center">
        <div>
          <p>언어 : </p>
        </div>
        <Spacer distance={8} />

        <ChangeLanguageDropdown
          selectedItem={selectedLanguage}
          onChange={(updatedLanguage) => updateLanguage(updatedLanguage)}
          items={languageList}
        />
      </div>
    </div>
  )
}

export default Header