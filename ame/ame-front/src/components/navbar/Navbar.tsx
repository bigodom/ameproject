import { Link } from "react-router-dom"
import './Navbar.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand text-white">AME</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={'/listarbeneficiados'} className="nav-link text-white teste">Listar Beneficiados</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/listarresponsaveis'} className="nav-link text-white">Listar Responsáveis</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/cadastrar'} className="nav-link text-white">Cadastrar</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { Navbar }