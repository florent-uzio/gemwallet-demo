// import { Flex } from '@ripple/design-system'
import { Flex } from "@chakra-ui/react"
import React from "react"
import { PageBody, PageHeader, PageTitle } from "./atoms"

// import { PageBody, PageHeader, PageHeaderActions, PageTitle } from './atoms'
// import { PageSubHeader } from './atoms/page-sub-header'

type PageProps = React.HTMLAttributes<HTMLElement> & {
  borderless?: boolean
}

type PageComponent = React.FC<PageProps> & {
  Body: typeof PageBody
  Header: typeof PageHeader
  //   HeaderActions: typeof PageHeaderActions
  //   SubHeader: typeof PageSubHeader
  Title: typeof PageTitle
}

export const Page: PageComponent = ({ children, ...rest }) => (
  <Flex {...rest} as="main" direction="column" flex={1}>
    {children}
  </Flex>
)

Page.Body = PageBody
Page.Header = PageHeader
// Page.HeaderActions = PageHeaderActions
// Page.SubHeader = PageSubHeader
Page.Title = PageTitle
