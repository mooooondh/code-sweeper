// interfaces
import { ICheckResults, ISingleCheckResult } from "../../../../../utils/interfaces/check"

export const meaningfulName = (inputCode: string, lineNumber: number, currentResult: ICheckResults) => {
  let result = currentResult

  const nameList = extractVariableAndFunctionNames(inputCode)

  for (let name of nameList) {
    if (name.length <= 1) {
      let newResult: ISingleCheckResult = {
        type: "warn",
        checkType: "valName",
        lineNumber: lineNumber,
        title: name,
        reason: "변수의 길이가 너무 짧습니다."
      }

      if (Array.isArray(result[lineNumber])) {
        result[lineNumber] = [...result[lineNumber], newResult]
      }
      else {
        result[lineNumber] = [newResult]
      }
    }

    const bannedName: string[] = ["foo", "bar"]
    if (bannedName.includes(name)) {
      let newResult: ISingleCheckResult = {
        type: "warn",
        checkType: "valName",
        lineNumber: lineNumber,
        title: name,
        reason: "의미있는 변수명을 사용해주세요."
      }

      if (Array.isArray(result[lineNumber])) {
        result[lineNumber] = [...result[lineNumber], newResult]
      }
      else {
        result[lineNumber] = [newResult]
      }
    }

    // const reservedWords: string[] = ["if", "else", "while", "for", "function", "var", "let", "const"]

    // if (reservedWords.includes(name)) {
    //   let newResult: ISingleCheckResult = {
    //     type: "error",
    //     checkType: "valName",
    //     lineNumber: lineNumber,
    //     title: name,
    //     reason: "변수명에 예약어를 포함하고 있습니다."
    //   }

    //   let tmpResult = JSON.parse(JSON.stringify(result))
    //   tmpResult[lineNumber] = [...tmpResult[lineNumber], newResult]
    //   setResult(tmpResult)
    // }

    //const invalidPatterns: RegExp[] = [/^[0-9]/]

    //if (invalidPatterns.some(pattern => pattern.test(name))) {
    //  let newResult: ISingleCheckResult = {
    //    type: "error",
    //    checkType: "valName",
    //    title: name,
    //    reason: "변수명이 숫자로 시작됩니다."
    //  }

    //  result.push(newResult)
    //}
  }

  return result
}

const extractVariableAndFunctionNames = (code: string) => {
  const matches = code.match(/\b(?:const|let|var|function)\s+([a-zA-Z_]\w*)/g)

  const uniqueNames = matches
    ? Array.from(new Set(matches.map(match => match.split(/\s+/)[1])))
    : []

  return uniqueNames
}
