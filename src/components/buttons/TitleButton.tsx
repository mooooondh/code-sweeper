// next
import Link from "next/link"
import Image from "next/image"

// components
import { Spacer } from "../basics/Spacer"

// image
import LOGO from "@/app/assets/icons/logo.svg"

interface props { }

export const TitleButton = (props: props) => {
  return (
    <Link href={"/"}>
      <div className="flex flex-row items-end">
        <div className="flex flex-row items-center">
          <Image
            src={LOGO}
            alt={"logo"}
            width={32}
            height={32}
          />
          <Spacer distance={8} />
          <p className="text-xl font-extrabold">Code Sweeper</p>
        </div>
        <Spacer distance={8} />
        <p className="text-sm">v{process.env.NEXT_PUBLIC_VERSION}</p>
      </div>
    </Link>
  )
}