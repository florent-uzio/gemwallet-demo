import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"

type CodeBlockProps = {
  code: string
  language?: string
}

export const CodeBlock = ({ code, language = "typescript" }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language={language} style={docco}>
      {code}
    </SyntaxHighlighter>
  )
}
