import { RouteProps } from "react-router-dom"

export type WalletLink = Omit<RouteProps, "path"> & {
  icon?: React.ReactNode
  name: string
} & {
  path: string
}
