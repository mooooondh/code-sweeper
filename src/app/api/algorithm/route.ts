// next
import { NextRequest, NextResponse } from "next/server"

// checkAlgorithm
import { IsCleanCode } from "./checkAlgorithm/javascript"

// interfaces
import { ICheckResults } from "@/utils/interfaces/check"

// utils
import { lineSeperator } from "@/utils/utilFunctions/lineSeperator"

export async function POST(req: NextRequest) {
  const data = await req.json()

  let cleanCodeCheckResult: ICheckResults = {}

  switch (data.language) {
    case "javascript": {
      cleanCodeCheckResult = IsCleanCode(lineSeperator(data.inputCode))
      break
    }
  }

  const returnData = {
    cleanCodeCheckResult: cleanCodeCheckResult
  }

  return NextResponse.json(returnData)
}