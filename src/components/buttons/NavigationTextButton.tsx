"use client"

// next
import Image from "next/image"

// components
import { Spacer } from "../basics/Spacer"

// images
import RIGHT from "@/app/assets/icons/right.svg"
import { SP } from "next/dist/shared/lib/utils"

interface props {
  title: string
  onClick(): void
}

export const NavigationTextButton = (props: props) => {
  return (
    <button
      className="flex flex-row items-center hover:border-b-2"
      onClick={props.onClick}
    >
      <p className="text-xl pl-2">{props.title}</p>
      <Spacer distance={4} />
      <Image src={RIGHT} alt={"aaa"} width={28} height={28} />
    </button>
  )
}