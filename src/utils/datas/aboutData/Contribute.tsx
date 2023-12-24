// components
import { Spacer } from "@/components/basics/Spacer"
import { NavigationTextButton } from "@/components/buttons/NavigationTextButton"

export const Contribute = () => {
  return (
    <div className="flex flex-col p-4">
      <p className="text-2xl font-extrabold">기여하기</p>
      <pre>{contribute}</pre>
      <Spacer distance={16} />

      <NavigationTextButton
        title={"GitHub"}
        navigationLink={"https://github.com/mooooondh/code-sweeper"}
      />
    </div>
  )
}

const contribute = `
GitHub을 통해 알고리즘, 서비스를 개선에 기여할 수 있습니다.
`