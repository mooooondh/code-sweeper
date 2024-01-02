// components
import { Spacer } from "@/components/basics/Spacer"
import { NavigationButton } from "@/components/buttons/NavigationButton"

const NotFound = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center h-screen bg-gray-800">
      <p className="text-8xl font-extrabold">404</p>
      <Spacer distance={8} />
      <p className="text-2xl">페이지를 찾을 수 없습니다.</p>
      <Spacer distance={64} />

      <NavigationButton
        title={"돌아가기"}
        navigationLink={"../"}
      />
    </div>
  )
}

export default NotFound