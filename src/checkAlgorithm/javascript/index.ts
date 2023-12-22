// interfaces
import { ICheckResults } from "../../utils/interfaces/check"

// algorithm
import { meaningfulName } from "./meaningfulName"
import { functionParamCount } from "./functionParamCount"
import { findConsoleLog } from "./findConsoleLog"

export const IsCleanCode = (inputCode: string[]) => {
  let result: ICheckResults = {}

  for (let i = 0; i < inputCode.length; i++) {
    meaningfulName(inputCode[i], i, result)
    functionParamCount(inputCode[i], i, result)
    findConsoleLog(inputCode[i], i, result)
  }

  return result
}