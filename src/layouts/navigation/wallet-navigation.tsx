import { chakra, Icon, Image } from "@chakra-ui/react"
import { AiOutlineHome } from "react-icons/ai"
import { MdOutlinePayments } from "react-icons/md"
import XRPLogo from "../../images/xrp-logo.png"
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
      <Image src={XRPLogo} />
      <nav>
        {LINKS.map((link) => {
          return (
            <WalletNavLink css={{ display: "flex", gap: 10 }} to={link.path}>
              {link.icon && link.icon} {link.name}
            </WalletNavLink>
          )
        })}
      </nav>
    </SideNav>
  )
}
