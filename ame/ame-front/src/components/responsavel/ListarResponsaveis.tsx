import { useEffect, useState } from "react";
import api from "../../services/api";

export interface Responsavel {
    responsavelcpf: string;
    nome: string;
    pacotes: number;
}

const ListarResponsaveis = () => {
    const [responsaveis, setResponsaveis] = useState<Responsavel[]>([]);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        api.get('/responsaveis').then(response => {
            console.log(response.data);
            setResponsaveis(response.data);
        });
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiltro(event.target.value);
    };

    //retorna uma tabela com coluna nome e coluna cpf dos responsaveis
    return (
        <div>
            <h1>Responsaveis</h1>
            <input type="text" value={filtro} onChange={handleInputChange}/>
            <table>
                <thead>
                    <tr>
                        <th>Nome: </th>
                        <th>CPF: </th>
                        <th>Pacotes: </th>
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
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export {ListarResponsaveis};