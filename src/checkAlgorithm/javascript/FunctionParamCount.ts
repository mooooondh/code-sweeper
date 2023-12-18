// interfaces
import { ICheckResults, ISingleCheckResult } from "../../utils/interfaces/check"

export const FunctionParamCount = (inputCode: string, lineNumber: number, currentResult: ICheckResults) => {
  let result = currentResult

  const functionDeclarationRegex = /function\s+([a-zA-Z_$][\w$]*)\s*\(([^)]*)\)/g;
  const arrowFunctionRegex = /([a-zA-Z_$][\w$]*)\s*=\s*\(([^)]*)\)\s*=>/g;

  // function
  let matches = Array.from(inputCode.matchAll(functionDeclarationRegex));

  for (const match of matches) {
    const functionName: string = match[1];
    const parameters: string[] = match[2].split(',').map(param => param.trim());

    if (parameters.length >= 3) {
      let newResult: ISingleCheckResult = {
        type: "warn",
        checkType: "functionParamCount",
        lineNumber: lineNumber,
        title: functionName,
        reason: "파라미터 갯수가 너무 많습니다."
      }

      if (Array.isArray(result[lineNumber])) {
        result[lineNumber] = [...result[lineNumber], newResult]
      }
      else {
        result[lineNumber] = [newResult]
      }
    }
  }

  // arrow function
  matches = Array.from(inputCode.matchAll(arrowFunctionRegex));

  for (const match of matches) {
    const functionName: string = match[1];
    const parameters: string[] = match[2].split(',').map(param => param.trim());

    if (parameters.length >= 3) {
      let newResult: ISingleCheckResult = {
        type: "warn",
        checkType: "functionParamCount",
        lineNumber: lineNumber,
        title: functionName,
        reason: "파라미터 갯수가 너무 많습니다."
      }

      if (Array.isArray(result[lineNumber])) {
        result[lineNumber] = [...result[lineNumber], newResult]
      }
      else {
        result[lineNumber] = [newResult]
      }
    }
  }

  return result
}