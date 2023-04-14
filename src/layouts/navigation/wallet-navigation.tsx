import { chakra, Icon, Image, VStack } from "@chakra-ui/react"
import { AiOutlineHome } from "react-icons/ai"
import { MdOutlinePayments } from "react-icons/md"
import GemWallet from "../../images/gemwallet.svg"
import XRPLogo from "../../images/xrp-logo.png"
import { ConnectionDetails } from "./connection-details"
import { WalletLink } from "./wallet-navigation.types"
import { WalletNavLink } from "./wallet-navlink"

const SideNav = chakra("header", {
  baseStyle: {
    backgroundColor: "white",
    w: 250,
    overflowY: "auto",
    h: "100vh",
  },
})

const LINKS: WalletLink[] = [
  { icon: <Icon as={AiOutlineHome} />, path: "/", name: "Home" },
  {
    icon: <Icon as={MdOutlinePayments} />,
    path: "/payments",
    name: "Payments",
  },
]

export const WalletNavigation = () => {
  return (
    <SideNav>
      <VStack mb={10}>
        <Image src={XRPLogo} />
        <Image boxSize={100} src={GemWallet} />
      </VStack>
      <ConnectionDetails sx={{ justifyContent: "center", mb: 5 }} />
      <nav>
        {LINKS.map((link) => {
          return (
            <WalletNavLink key={link.path} css={{ display: "flex", gap: 10 }} to={link.path}>
              {link.icon && link.icon} {link.name}
            </WalletNavLink>
          )
        })}
      </nav>
    </SideNav>
  )
}
