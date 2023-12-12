import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListarResponsaveis } from "./components/responsavel/ListarResponsaveis";
import { ListarBeneficiados } from "./components/beneficiado/ListarBeneficiados";
import { Navbar } from "./components/navbar/Navbar";
import { AtualizarResponsavel } from "./components/responsavel/AtualizarResponsavel";
import { AtualizarBeneficiado } from "./components/beneficiado/AtualizarBeneficiado";
import { Cadastro } from "./components/cadastro/Cadastro";
import { Principal } from "./components/principal/Principal";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><Principal/></>}/>
        <Route path="/listarresponsaveis" element={<><Navbar/><ListarResponsaveis /></>}/>
        <Route path="/listarbeneficiados" element={<><Navbar  /><ListarBeneficiados /></>}/>
        <Route path="/atualizarresponsavel/:responsavelcpf" element={<><Navbar/><AtualizarResponsavel /></>}/>
        <Route path="/atualizarbeneficiado/:beneficiadocpf" element={<><Navbar/><AtualizarBeneficiado /></>}/>
        <Route path="/cadastrar" element={<><Navbar/><Cadastro/></>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes