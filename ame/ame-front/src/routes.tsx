import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastrarResponsavel } from "./components/responsavel/CadastrarResponsavel";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastraresponsavel" element={<CadastrarResponsavel />} />
        <Route path="/cadastrabeneficiado" />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes