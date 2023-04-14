import { chakra, Flex } from "@chakra-ui/react"
import { WalletNavigation } from "./navigation"

const StyledPage = chakra(Flex, {
  baseStyle: {
    width: "100vw",
    height: "100vh",
    flexWrap: "wrap",
    overflow: "hidden",
  },
})

const StyledMain = chakra("main", {
  baseStyle: {
    overflowY: "scroll",
    height: "100vh",
    flex: 1,
    p: 8,
  },
})

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <StyledPage>
      <WalletNavigation />
      <StyledMain>{children}</StyledMain>
    </StyledPage>
  )
}
