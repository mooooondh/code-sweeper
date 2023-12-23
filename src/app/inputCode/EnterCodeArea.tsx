"use client"

// react
import { useLayoutEffect } from "react"

// components
import { LargeTextInput } from "@/components/textInputs/LargeTextInput"

// hooks
import { useChecker } from "@/hooks/useChecker"

const EnterCodeArea = () => {
  const { inputCode, updateInputCode, clearResult } = useChecker()

  useLayoutEffect(() => {
    clearResult()
  }, [])

  return (
    <div className="flex flex-1">
      <LargeTextInput
        value={inputCode}
        onChange={(value) => updateInputCode(value)}
        placeholder="코드를 입력해주세요."
      />
    </div>
  )
}

export default EnterCodeArea