import { getNetwork, isConnected } from "@gemwallet/api"
import { useEffect, useState } from "react"
import { contextFactory } from "../helpers"
import {
  GemWalletProviderContext,
  GemWalletProviderProps,
} from "./gemwallet-connection-context.types"

const [GemWalletContext, useGemWalletContext] = contextFactory<GemWalletProviderContext>({
  hook: "useGemWalletContext",
  provider: "GemWalletProviderContext",
})

export const GemWalletProvider = ({ children }: GemWalletProviderProps) => {
  const [hasGemWallet, setHasGemWallet] = useState(false)
  const [network, setNetwork] = useState("")

  useEffect(() => {
    let timesRun = 0
    const interval = setInterval(() => {
      timesRun += 1
      if (timesRun === 5 || hasGemWallet) {
        clearInterval(interval)
      }
      isConnected()
        .then((response) => {
          console.log('isConnected', response);
          setHasGemWallet(response)
          // bug
          getNetwork()
            .then((resp: any) => {
              console.log('getNetwork', resp);
              setNetwork(resp)
            })
            .catch((err) => console.error(`Can't load GemWallet network, ${err}`))
        })
        .catch((err) => console.error(err))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const api: GemWalletProviderContext = {
    isConnected: hasGemWallet,
    network,
  }

  return <GemWalletContext.Provider value={api}>{children}</GemWalletContext.Provider>
}

export { GemWalletContext, useGemWalletContext }
