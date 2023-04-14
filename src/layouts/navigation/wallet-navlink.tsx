import { chakra } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

export const WalletNavLink = chakra(NavLink, {
  baseStyle: {
    alignItems: "center",
    cursor: "pointer",
    display: "block",
    overflow: "hidden",
    px: 30,
    py: 3,
    textColor: "gray.500",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "100%",
    _active: {
      textColor: "gray.900",
    },
    _hover: {
      textColor: "gray.700",
    },
  },
})
