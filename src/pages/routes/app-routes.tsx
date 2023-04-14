import { Route, Routes } from "react-router-dom"
import { AppLayout } from "../../layouts"
import { Home } from "../home"
import { PaymentsPage } from "../payments"

export const AppRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<PaymentsPage />} />
      </Routes>
    </AppLayout>
  )
}
