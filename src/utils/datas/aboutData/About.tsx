// components
import { Spacer } from "@/components/basics/Spacer"

export const About = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col p-4 bg-red-600/40 rounded-lg">
        <p>주의사항</p>
        <Spacer distance={8} />
        <p>{"\""}깨끗한 코드{"\""}의 기준은 사람마다, 서비스마다 다릅니다.{"\n"}본 서비스는 참고용으로만 사용해주세요.</p>
      </div>
      <Spacer distance={32} />

      <p className="text-2xl font-extrabold">Code Sweeper는 무엇인가요?</p>
      <pre>{about}</pre>
      <Spacer distance={32} />

      <p className="text-2xl font-extrabold">알고리즘</p>
      <pre>{algorithm}</pre>
      <Spacer distance={32} />

      <p className="text-2xl font-extrabold">AI</p>
      <pre>{ai}</pre>
      <Spacer distance={32} />
    </div>
  )
}

const about = `
Code Sweeper는 깨끗한 코드를 위해 개선 사항을 추천해주는 서비스입니다.
코드를 입력한 후 "검사 시작"버튼을 누르면 개선 사항을 확인할 수 있습니다.
개선 사항은 2가지로 나타납니다.

* 알고리즘
* AI
`

const algorithm = `
알고리즘 방식은 정해진 알고리즘에 의해 개선 사항을 추천해드립니다.
변수 길이, 변수명, 파라미터 갯수 등을 감지합니다.
"기여하기"메뉴를 통해 알고리즘 개선에 기여할 수 있습니다.
`

const ai = `
AI가 개선된 코드를 추천해드립니다.
`