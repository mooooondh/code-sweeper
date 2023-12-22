"use client"

// next
import { useRouter } from "next/navigation"

// components
import { NormalButton } from "@/components/buttons/NormalButton"

// hooks
import { useChecker } from "@/hooks/useChecker"

const Footer = () => {
  const router = useRouter()

  const { ClearResult } = useChecker()

  return (
    <div className="flex flex-row px-8 py-4 border-t-2 bg-gray-600">
      <NormalButton
        title={"뒤로가기"}
        onClick={() => {
          ClearResult()
          router.back()
        }}
      />
    </div>
  )
}

export default Footer