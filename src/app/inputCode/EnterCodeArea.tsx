"use client"

// components
import { LargeTextInput } from "@/components/textInputs/LargeTextInput"

// hooks
import { useChecker } from "@/hooks/useChecker"

const EnterCodeArea = () => {
  const { inputCode, UpdateInputCode } = useChecker()

  return (
    <div className="flex flex-1">
      <LargeTextInput
        value={inputCode}
        onChange={(value) => UpdateInputCode(value)}
        placeholder="코드를 입력해주세요."
      />
    </div>
  )
}

export default EnterCodeArea