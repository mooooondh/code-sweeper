"use client"

// react
import { useState } from "react"

// components
import { NormalButton } from "@/components/buttons/NormalButton"
import { SingleCodeLine } from "./SingleCodeLine"
import { LoadingView } from "@/components/basics/LoadingView"
import { ClickableTag } from "@/components/Tags/ClickableTag"
import { Spacer } from "@/components/basics/Spacer"
import { ExplainModal } from "./ExplainModal"

// hooks
import { useChecker } from "@/hooks/useChecker"

const AiResultArea = () => {
  const [isExplainModalVisible, setIsExplainModalVisible] = useState(false)

  const { aiResult, aiResultLinedCode, CheckIsCleanCodeWithAi, isAiResultLoading } = useChecker()

  const renderAiResult = () => {
    if (isAiResultLoading) return <></>

    return (
      aiResult.length >= 1
        ? <div>
          {
            aiResultLinedCode.map((singlecodeLine, idx) =>
              <SingleCodeLine
                key={idx}
                lineNumber={idx}
                codeLine={singlecodeLine}
                isShowWarn={false}
              />
            )
          }
        </div>
        : <div className="flex flex-1 items-center justify-center">
          <NormalButton
            title={"AI추천 코드 보기"}
            onClick={CheckIsCleanCodeWithAi}
          />
        </div>
    )
  }

  return (
    <div className="relative flex flex-1 flex-col overflow-y-scroll whitespace-pre overflow-x-auto border-l border-l-white" style={{ padding: "16px" }}>
      <ClickableTag
        title={"AI"}
        backgroundColor={"bg-blue-600"}
        textColor={"text-white"}
        onClick={() => setIsExplainModalVisible(!isExplainModalVisible)}
      />
      <Spacer distance={8} />

      {renderAiResult()}

      <ExplainModal isVisible={isExplainModalVisible}>
        <div>
          <p className="text-black">AI가 수정한 코드 입니다.</p>
        </div>
      </ExplainModal>

      <LoadingView isLoading={isAiResultLoading} />
    </div>
  )
}

export default AiResultArea