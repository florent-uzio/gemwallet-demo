import { isConnected } from "@gemwallet/api"
import { useEffect, useState } from "react"
import { contextFactory } from "../helpers"
import {
  GemWalletProviderContext,
  GemWalletProviderProps,
} from "./gemwallet-connection-context.types"

// export const GemWalletContext = createContext<GemWalletProviderContext | undefined>(undefined)

const [GemWalletContext, useGemWalletContext] = contextFactory<GemWalletProviderContext>({
  hook: "useGemWalletContext",
  provider: "GemWalletProviderContext",
})

export const GemWalletProvider = ({ children }: GemWalletProviderProps) => {
  const [hasGemWallet, setHasGemWallet] = useState(false)

  useEffect(() => {
    let timesRun = 0
    const interval = setInterval(() => {
      timesRun += 1
      if (timesRun === 5 || hasGemWallet) {
        clearInterval(interval)
      }
      isConnected()
        .then((response) => {
          setHasGemWallet(response)
        })
        .catch((err) => console.error(err))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const api: GemWalletProviderContext = {
    isConnected: hasGemWallet,
  }

  return <GemWalletContext.Provider value={api}>{children}</GemWalletContext.Provider>
}

export { GemWalletContext, useGemWalletContext }
