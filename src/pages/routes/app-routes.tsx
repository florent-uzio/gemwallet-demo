import { Route, Routes } from "react-router-dom"
import { Home } from "../home"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
