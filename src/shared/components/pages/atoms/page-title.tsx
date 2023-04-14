import { ChakraProps, Heading } from "@chakra-ui/react"
import React from "react"

type PageTitleProps = {
  children?: React.ReactNode
  className?: string
  css?: ChakraProps["sx"]
  title: string
}

export const PageTitle: React.FC<PageTitleProps> = ({ children, css, title, ...rest }) => (
  <Heading
    css={{
      display: "flex",
      alignItems: "center",
      gap: "$2",
      wordBreak: "break-word",
    }}
    sx={css}
    {...rest}
    size="lg"
    as="h1"
  >
    {title}
    {children}
  </Heading>
)
