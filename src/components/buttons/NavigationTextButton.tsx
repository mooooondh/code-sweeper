// next
import Link from "next/link"
import Image from "next/image"

// components
import { Spacer } from "../basics/Spacer"

// images
import RIGHT from "@/app/assets/icons/right.svg"

interface props {
  title: string
  navigationLink: string
}

export const NavigationTextButton = (props: props) => {
  return (
    <Link
      className="flex flex-row items-center w-fit hover:border-b-2"
      href={props.navigationLink}
    >
      <p className="text-xl pl-2">{props.title}</p>
      <Spacer distance={4} />
      <Image src={RIGHT} alt={"aaa"} width={28} height={28} />
    </Link>
  )
}