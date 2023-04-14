import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./layouts"
import { GemWalletProvider } from "./shared/contexts/gemwallet-connection-context"
import { theme } from "./shared/theme"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GemWalletProvider>
        <App />
      </GemWalletProvider>
    </ChakraProvider>
  </React.StrictMode>
)
