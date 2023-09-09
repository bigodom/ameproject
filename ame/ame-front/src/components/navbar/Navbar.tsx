import { Link } from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand">AME</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/listarbeneficiados'} className="nav-link">Listar Beneficiados</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/cadastrarbeneficiado'} className="nav-link">Cadastrar Beneficiados</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/listarresponsaveis'} className="nav-link">Listar Responsáveis</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/cadastraresponsavel'} className="nav-link">Cadastrar Responsável</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { Navbar }