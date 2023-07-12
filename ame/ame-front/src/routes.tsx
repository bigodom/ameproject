import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastrarResponsavel } from "./components/responsavel/CadastrarResponsavel";
import { ListarResponsaveis } from "./components/responsavel/ListarResponsaveis";
import { ListarBeneficiados } from "./components/beneficiado/ListarBeneficiados";
import CadastrarBeneficiado from "./components/beneficiado/CadastrarBeneficiado";
import { Navbar } from "./components/navbar/Navbar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}/>
        <Route path="/cadastraresponsavel" element={<><Navbar/><CadastrarResponsavel /></>}/>
        <Route path="/listarresponsaveis" element={<><Navbar/><ListarResponsaveis /></>}/>
        <Route path="/cadastrarbeneficiado" element={<><Navbar/><CadastrarBeneficiado /></>}/>
        <Route path="/listarbeneficiados" element={<><Navbar  /><ListarBeneficiados /></>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes