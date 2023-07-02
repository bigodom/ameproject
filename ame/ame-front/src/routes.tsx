import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastrarResponsavel } from "./components/responsavel/CadastrarResponsavel";
import { ListarResponsaveis } from "./components/responsavel/ListarResponsaveis";
import { ListarBeneficiados } from "./components/beneficiado/ListarBeneficiados";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastraresponsavel" element={<CadastrarResponsavel />} />
        <Route path="/listarresponsaveis" element={<ListarResponsaveis />} />
        <Route path="/cadastrabeneficiado" />
        <Route path="/listarbeneficiados" element={<ListarBeneficiados />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes