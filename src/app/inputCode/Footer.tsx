"use client"

// nextjs
import { useRouter } from "next/navigation"

// components
import { NormalButton } from "@/components/buttons/NormalButton"

// hooks
import { useChecker } from "@/hooks/useChecker"

const Footer = () => {
  const router = useRouter()

  const { inputCode, CheckIsCleanCode } = useChecker()

  return (
    <div className="flex flex-row justify-end px-8 py-4 border-t-2 bg-gray-600">
      <NormalButton
        title={"검사 시작"}
        onClick={() => {
          CheckIsCleanCode()
          router.push("/result")
        }}
        disable={!(inputCode.length >= 1)}
      />
    </div>
  )
}

export default Footer