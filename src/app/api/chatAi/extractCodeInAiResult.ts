export const extractCodeInAiResult = (markdown: string) => {
  const codeBlockRegex = /```(?:\w+)?\s*([\s\S]*?)\s*```/g
  const codeBlocks = []
  let match

  while ((match = codeBlockRegex.exec(markdown)) !== null) {
    codeBlocks.push(match[1])
  }

  return codeBlocks
}