// componetns
import { Spacer } from "@/components/basics/Spacer"
import { NavigationButton } from "@/components/buttons/NavigationButton"

export default function Home() {
  return (
    <div className="flex flex-1 h-screen bg-gray-800">
      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="text-8xl">Code Sweeper</p>
        <Spacer distance={16} />

        <p className="text-2xl">깨끗한 코드를 추천해드립니다.</p>
        <Spacer distance={64} />

        <NavigationButton
          title={"시작하기"}
          navigationLink={"/checker"}
        />
      </div>
    </div>
  )
}
