import { Link } from "react-router-dom";

const Principal = () => {
    return (
        <>
            <div className="container">
                <h3 className="text-center mt-5 mb-5">Cadastro de quem vai receber a farinha </h3>
                <div className="align-items-center">
                    <div className="me-5 text-center">

                    <p className="fs-5">Para cadastrar um beneficiado, clique no botão para ir para a tela de cadastro. Você deve primeiro cadastrar o responsável
                        e logo em seguida o beneficiado.
                        <p className="fw-bold">Lembre de conferir o nome do responsável ao digitar o cpf do mesmo no beneficiado.</p>
                    </p>
                    </div>
                    <Link to={'/cadastrar'} className="btn btn-primary"> Clique para Cadastrar</Link>
                </div>

                <h3 className="text-center mt-5 mb-5">Quem já possui cadastro</h3>
                <div className="align-items-center">
                    <div className="me-5 text-center">

                    <p className="fs-5">Para quem já é um beneficiado, clique no botão para ir para a tela de cadastrados, 
                        onde você pode ver todos os beneficiados e fazer a atualização dos dados e da quantidade de farinha recebida.
                        <p className="fw-bold">Lembre de conferir o nome do responsável ao digitar o cpf do mesmo no beneficiado.</p>
                    </p>
                    </div>
                    <Link to={'/cadastrar'} className="btn btn-primary "> Clique para Atualizar</Link>
                </div>
            </div>
        </>
    )
}

export { Principal }