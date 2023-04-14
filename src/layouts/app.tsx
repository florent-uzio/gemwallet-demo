import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "../pages/routes"
import { GemWalletProvider } from "../shared/contexts"

export function App() {
  return (
    <BrowserRouter>
      <GemWalletProvider>
        <AppRoutes />
      </GemWalletProvider>
    </BrowserRouter>
  )
}
