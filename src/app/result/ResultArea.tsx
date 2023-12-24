"use client"

// react
import { useState } from "react"

// components
import { SingleCodeLine } from "./SingleCodeLine"
import { ClickableTag } from "@/components/Tags/ClickableTag"
import { Spacer } from "@/components/basics/Spacer"
import { ExplainModal } from "./ExplainModal"
import { NormalTag } from "@/components/Tags/NormalTag"
import { NavigationTextButton } from "@/components/buttons/NavigationTextButton"

// hooks
import { useChecker } from "@/hooks/useChecker"

// datas
import { supportLanguageList } from "@/utils/datas/languages"

const ResultArea = () => {
  const [isExplainModalVisible, setIsExplainModalVisible] = useState(false)

  const { selectedLanguage, linedInputCode } = useChecker()

  return (
    <div className="relative flex flex-1 flex-col overflow-y-scroll whitespace-pre overflow-x-auto p-4 border-r border-r-white">
      <div className="flex flex-row items-center justify-between">
        <ClickableTag
          title={"알고리즘"}
          backgroundColor={"bg-pink-600"}
          textColor={"text-white"}
          onClick={() => setIsExplainModalVisible(!isExplainModalVisible)}
        />

        {
          !supportLanguageList.includes(selectedLanguage) &&
          <NormalTag
            title={`지원하지 않는 언어입니다. AI추천 코드를 이용해주세요.`}
            backgroundColor={"bg-gray-600"}
            textColor={"text-white"}
          />
        }
      </div>
      <Spacer distance={8} />

      {
        linedInputCode.map((singlecodeLine, idx) =>
          <SingleCodeLine
            key={idx}
            lineNumber={idx}
            codeLine={singlecodeLine}
            isShowWarn={true}
          />
        )
      }

      <ExplainModal isVisible={isExplainModalVisible}>
        <div>
          <p>알고리즘이 검사한 결과입니다.</p>
          <Spacer distance={8} />

          <p>알고리즘 개선에 기여하고싶으시다면?</p>
          <Spacer distance={4} />
          <NavigationTextButton
            title={"GitHub으로 이동"}
            navigationLink={"https://github.com/mooooondh/code-sweeper"}
          />
        </div>
      </ExplainModal>
    </div>
  )
}

export default ResultArea