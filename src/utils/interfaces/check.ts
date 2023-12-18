export interface ISingleCheckResult {
  type: "error" | "warn"
  checkType: "valName" | "functionParamCount" | "consoleLog"
  lineNumber: number
  title: string
  reason: string
}

export interface ICheckResults {
  [key: string]: ISingleCheckResult[]
}