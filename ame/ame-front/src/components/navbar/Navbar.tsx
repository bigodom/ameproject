import { Link } from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={'/'}> Home </Link>
            <Link to={'/listarbeneficiados'}> <button>Listar Beneficiados</button></Link>
            <Link to={'/cadastrarbeneficiado'}> <button>Cadastrar Beneficiados</button></Link>
            <Link to={'/listarresponsaveis'}> <button>Listar Responsáveis</button></Link>
            <Link to={'/cadastraresponsavel'}> <button>Cadastrar Responsável</button></Link>
        </div>
    )
}

export { Navbar }