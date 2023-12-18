"use client"

// components
import { SingleCodeLine } from "./SingleCodeLine"

// hooks
import { useChecker } from "@/hooks/useChecker"

const ResultArea = () => {
  const { linedInputCode } = useChecker()

  return (
    <div className="flex flex-1 flex-col overflow-y-scroll whitespace-pre overflow-x-auto" style={{ padding: "16px" }}>
      {
        linedInputCode.map((singlecodeLine, idx) =>
          <SingleCodeLine
            key={idx}
            lineNumber={idx}
            codeLine={singlecodeLine}
          />
        )
      }
    </div>
  )
}

export default ResultArea