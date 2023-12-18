// interfaces
import { ICheckResults } from "../../utils/interfaces/check"

import { MeaningfulName } from "./MeaningfulName"
import { FunctionParamCount } from "./FunctionParamCount"
import { FindConsoleLog } from "./FindConsoleLog"

export const IsCleanCode = (inputCode: string[]) => {
  let result: ICheckResults = {}

  for (let i = 0; i < inputCode.length; i++) {
    MeaningfulName(inputCode[i], i, result)
    FunctionParamCount(inputCode[i], i, result)
    FindConsoleLog(inputCode[i], i, result)
  }

  return result
}