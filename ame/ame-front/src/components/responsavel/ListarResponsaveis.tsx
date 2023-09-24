import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export interface Responsavel {
    responsavelcpf: string;
    nome: string;
    pacotes: number;
}

const ListarResponsaveis = () => {
    const [responsaveis, setResponsaveis] = useState<Responsavel[]>([]);
    const [filtro, setFiltro] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/responsaveis').then(response => {
            console.log(response.data);
            setResponsaveis(response.data);
        });
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiltro(event.target.value);
    };

    const handleDeleteResponsavel = async (responsavelcpf: string) => {
        try {
            await api.delete(`/responsavel/${responsavelcpf}`);
            alert('Responsavel deletado com sucesso!');
            setResponsaveis(responsaveis.filter(responsavel => responsavel.responsavelcpf !== responsavelcpf));
        } catch (error) {
            alert('Erro ao deletar responsavel!');
        }
    }

    //retorna uma tabela com coluna nome e coluna cpf dos responsaveis
    return (
        <div className="container">
            <h1 className="text-center">Responsaveis</h1>
            <input type="text" className="form-control mt-3" placeholder="Filtrar por nome ou CPF" value={filtro} onChange={handleInputChange}/>
            <table className="table table-bordered mt-3 table-striped-columns">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Pacotes</th>
                    </tr>
                </thead>
                <tbody>
                    {responsaveis
                        .filter(responsavel => responsavel.nome.toLowerCase().includes(filtro.toLowerCase()) || responsavel.responsavelcpf.includes(filtro))
                        .map(responsavel => (
                            <tr key={responsavel.responsavelcpf}>
                                <td>{responsavel.nome}</td>
                                <td>{responsavel.responsavelcpf}</td>
                                <td>{responsavel.pacotes}</td>
                                <td><button className="btn btn-primary" onClick={()=>navigate(`/atualizarresponsavel/${responsavel.responsavelcpf}`)}>ATUALIZAR</button></td>
                                <td><button className="btn btn-danger" onClick={()=>handleDeleteResponsavel(responsavel.responsavelcpf)}>DELETAR</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export {ListarResponsaveis};