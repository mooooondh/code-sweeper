// next
import Link from "next/link"
import Image from "next/image"

// componetns
import { Spacer } from "@/components/basics/Spacer"
import { NavigationButton } from "@/components/buttons/NavigationButton"
import { NormalTag } from "@/components/Tags/NormalTag"
import { NavigationTextButton } from "@/components/buttons/NavigationTextButton"

// image
import ICON from "@/app/assets/icons/logo.svg"
import GITHUB from "@/app/assets/icons/github.svg"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 p-4 h-screen bg-gray-800">
      <div className="flex justify-end">
        <Link href={"https://github.com/mooooondh/code-sweeper"}>
          <Image
            src={GITHUB}
            alt={"github"}
            width={40}
            height={40}
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex">
          <Image
            src={ICON}
            alt={"logo"}
            width={72}
            height={72}
          />
          <Spacer distance={16} />

          <p className="text-8xl font-black bg-gradient-to-r from-yellow-300 from-10% via-pink-600 to-indigo-500 text-transparent bg-clip-text">Code Sweeper</p>
          <div>
            <NormalTag
              title={`v${process.env.NEXT_PUBLIC_VERSION}`}
              backgroundColor={"bg-emerald-500"}
              textColor={"text-white"}
            />
          </div>
        </div>
        <Spacer distance={16} />

        <p className="text-2xl">{"<"}깨끗한 코드를 추천해드립니다.{"/>"}</p>
        <Spacer distance={64} />

        <NavigationButton
          title={"시작하기"}
          navigationLink={"/inputCode"}
        />
        <Spacer distance={24} />

        <NavigationTextButton
          title={"서비스 알아보기"}
          navigationLink="/about"
        />
      </div>
    </div>
  )
}
