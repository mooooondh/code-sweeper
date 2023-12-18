// interfaces
import { ICheckResults, ISingleCheckResult } from "../../utils/interfaces/check"

export const FindConsoleLog = (inputCode: string, lineNumber: number, currentResult: ICheckResults) => {
  let result = currentResult

  const regex = /console\.log\(/g;

  const matches = inputCode.match(regex);

  if (matches) {
    let newResult: ISingleCheckResult = {
      type: "warn",
      checkType: "consoleLog",
      lineNumber: lineNumber,
      title: "console.log",
      reason: "console.log는 지워주세요."
    }

    if (Array.isArray(result[lineNumber])) {
      result[lineNumber] = [...result[lineNumber], newResult]
    }
    else {
      result[lineNumber] = [newResult]
    }
  }
}