import { isConnected } from "@gemwallet/api"
import { useEffect, useState } from "react"
import { contextFactory } from "../helpers"
import {
  GemWalletProviderContext,
  GemWalletProviderProps,
} from "./gemwallet-connection-context.types"

// export const GemWalletContext = createContext<GemWalletProviderContext | undefined>(undefined)

const [GemWalletContext, useXGemWalletContext] = contextFactory<GemWalletProviderContext>({
  hook: "useGemWalletContext",
  provider: "GemWalletProviderContext",
})

export const GemWalletProvider = ({ children }: GemWalletProviderProps) => {
  const [hasGemWallet, setHasGemWallet] = useState(false)

  useEffect(() => {
    isConnected().then((isConnected) => {
      setHasGemWallet(isConnected)
    })
  }, [])

  const api: GemWalletProviderContext = {
    isConnected: hasGemWallet,
  }

  return <GemWalletContext.Provider value={api}>{children}</GemWalletContext.Provider>
}

export { GemWalletContext, useXGemWalletContext }
