import { useEffect, useState } from "react";
import api from "../../services/api";

interface Responsavel {
    responsavelcpf: string;
    nome: string;
}

const ListarResponsaveis = () => {
    const [responsaveis, setResponsaveis] = useState<Responsavel[]>([]);

    useEffect(() => {
        api.get('/responsavel').then(response => {
            console.log(response.data);
            setResponsaveis(response.data);
        });
    }, []);

    //retorna uma tabela com coluna nome e coluna cpf dos responsaveis
    return (
        <div>
            <h1>Responsaveis</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                    </tr>
                </thead>
                <tbody>
                    {responsaveis.map(responsavel => (
                        <tr key={responsavel.responsavelcpf}>
                            <td>{responsavel.nome}</td>
                            <td>{responsavel.responsavelcpf}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export {ListarResponsaveis};