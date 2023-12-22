// componetns
import { Spacer } from "@/components/basics/Spacer"
import { NavigationButton } from "@/components/buttons/NavigationButton"
import { NormalTag } from "@/components/Tags/NormalTag"

export default function Home() {
  return (
    <div className="flex flex-1 h-screen bg-gray-800">
      <div className="flex flex-1 flex-col items-center justify-center">
        <div className="flex">
          <p className="text-8xl font-extrabold bg-gradient-to-r from-yellow-300 from-10% via-pink-600 to-indigo-500 text-transparent bg-clip-text">Code Sweeper</p>
          <div>
            <NormalTag
              title={`v${process.env.NEXT_PUBLIC_VERSION}`}
              backgroundColor={"bg-emerald-500"}
              textColor={"text-white"}
            />
          </div>
        </div>
        <Spacer distance={16} />

        <p className="text-2xl">깨끗한 코드를 추천해드립니다.</p>
        <Spacer distance={64} />

        <NavigationButton
          title={"시작하기"}
          navigationLink={"/inputCode"}
        />
      </div>
    </div>
  )
}
