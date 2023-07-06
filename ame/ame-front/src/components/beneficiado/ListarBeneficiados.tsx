import { useEffect, useState } from "react";
import api from "../../services/api";
import { Responsavel } from "../responsavel/ListarResponsaveis";

export interface Beneficiado {
    beneficiadocpf: string;
    nome: string;
    data_nascimento: String;
    genero: string;
    telefone: string;
    email: string;
    cep: string;
    faixa_etaria: string;
    endereco: string;
    responsavelcpf: string;
}

const ListarBeneficiados = () => {
    const [beneficiados, setBeneficiados] = useState<Beneficiado[]>([]);
    const [responsaveis, setResponsaveis] = useState<Responsavel[]>([]);
    const [filtro, setFiltro] = useState('');

    useEffect(() => {
        api.get('/beneficiados').then(response => {
            console.log(response.data);
            setBeneficiados(response.data);
        });

        api.get('/responsaveis').then(response => {
            console.log(response.data);
            setResponsaveis(response.data);
        });
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiltro(event.target.value);
    };

    //retorna uma tabela com coluna nome, cpf, data de nascimento, genero, telefone, email, cep, faixa etaria, endereco, nome do responsavel e cpf do responsavel
    return (
        <>
            <h1>Beneficiados</h1>
            <input type="text" value={filtro} onChange={handleInputChange}/>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Data de Nascimento</th>
                        <th>Gênero</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>CEP</th>
                        <th>Faixa Etária</th>
                        <th>Endereço</th>
                        <th>Nome do Responsável</th>
                        <th>CPF do Responsável</th>
                    </tr>
                </thead>
                <tbody>
                    {beneficiados
                        .filter(beneficiado => beneficiado.nome.toLowerCase().includes(filtro.toLowerCase()) || beneficiado.beneficiadocpf.includes(filtro))
                        .map(beneficiado => (
                            <tr key={beneficiado.beneficiadocpf}>
                                <td>{beneficiado.nome}</td>
                                <td>{beneficiado.beneficiadocpf}</td>
                                <td>{beneficiado.data_nascimento}</td>
                                <td>{beneficiado.genero}</td>
                                <td>{beneficiado.telefone}</td>
                                <td>{beneficiado.email}</td>
                                <td>{beneficiado.cep}</td>
                                <td>{beneficiado.faixa_etaria}</td>
                                <td>{beneficiado.endereco}</td>
                                <td>{responsaveis.map(responsavel => (
                                    beneficiado.responsavelcpf === responsavel.responsavelcpf ? responsavel.nome : ''
                                ))}</td>
                                <td>{beneficiado.responsavelcpf}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    )
}

export {ListarBeneficiados};