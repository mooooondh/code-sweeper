"use client"

// interfaces
import { ILanguage } from "@/utils/interfaces/languages"

// datas
import { supportLanguageList } from "@/utils/datas/languages"

interface props {
  selectedItem: string
  onChange(updatedLanguage: ILanguage): void
  items: ILanguage[]
}

export const ChangeLanguageDropdown = (props: props) => {
  return (
    <select
      className="rounded-md outline-none"
      style={{ padding: "4px" }}
      onChange={(e) => props.onChange(e.target.value as ILanguage)}
      value={props.selectedItem}
    >
      {
        props.items.map((item, idx) =>
          <option key={idx} value={item}>{supportLanguageList.includes(item) ? item : item + "(AI only)"}</option>
        )
      }
    </select>
  )
}