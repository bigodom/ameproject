import { useEffect, useState } from "react";
import api from "../../services/api";
import { Responsavel } from "../responsavel/ListarResponsaveis";
import { useNavigate } from "react-router-dom";

export interface Beneficiado {
    beneficiadocpf: string;
    nome: string;
    data_nascimento: string;
    genero: string;
    telefone: string;
    email: string;
    cep: string;
    faixa_etaria: string;
    endereco: string;
    responsavelcpf: string;
    data_cadastro: string;
}

const ListarBeneficiados = () => {
    const [beneficiados, setBeneficiados] = useState<Beneficiado[]>([]);
    const [responsaveis, setResponsaveis] = useState<Responsavel[]>([]);
    const [filtro, setFiltro] = useState('');
    const navigate = useNavigate();

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

    const formatDate = (date: string) => {
        const data = new Date(date);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear();
        return `${dia}-${mes}-${ano}`;
    }

    const handleDeleteBeneficiado = async (beneficiadocpf: string) => {
        try {
            await api.delete(`/beneficiado/${beneficiadocpf}`);
            alert('Beneficiado deletado com sucesso!');
            setBeneficiados(beneficiados.filter(beneficiado => beneficiado.beneficiadocpf !== beneficiadocpf));
        } catch (error) {
            alert('Erro ao deletar beneficiado!');
        }
    }

    return (
        <div className="container">
            <h1 className="text-center">Beneficiados</h1>
            <input type="text" className="form-control mt-3" placeholder="Filtrar por nome ou CPF" value={filtro} onChange={handleInputChange}/>
            <table className="table table-bordered mt-3 table-striped-columns">
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
                        <th>Data de Cadastro</th>
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
                                <td>{formatDate(beneficiado.data_cadastro)}</td>
                                <td><button className="btn btn-primary" onClick={()=>navigate(`/atualizarbeneficiado/${beneficiado.beneficiadocpf}`)}>ATUALIZAR</button></td>
                                <td><button className="btn btn-danger" onClick={()=>handleDeleteBeneficiado(beneficiado.beneficiadocpf)}>DELETAR</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export {ListarBeneficiados};