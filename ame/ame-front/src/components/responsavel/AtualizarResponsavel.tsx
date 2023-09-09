import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';

interface ResponsavelFormData {
    nome: string;
    responsavelcpf: string;
    pacotes: number;
}

const AtualizarBeneficiado = () => {
    const [formData, setFormData] = useState<ResponsavelFormData>({
        nome: '',
        responsavelcpf: '',
        pacotes: 0,
    });

    const { cpf } = useParams(); // Parâmetro dinâmico da URL
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchResponsavel() {
            try {
                const response = await api.get(`/responsaveis/${cpf}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Erro ao buscar o responsavel:', error);
            }
        }

        fetchResponsavel();
    }, [cpf]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdateResponsavel = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Aqui você deve implementar a lógica para atualizar o beneficiado no servidor
        try {
            await api.put(`/beneficiados/${cpf}`, formData);
            alert('Beneficiado atualizado com sucesso!');
            navigate('/listarbeneficiados');
        } catch (error) {
            alert('Erro ao atualizar beneficiado!');
        }
    };

    return (
        <>
            <h1 className='text-center'>Atualizar Beneficiado</h1>
            <div className='container d-flex justify-content-center align-items-center'>
                <form onSubmit={handleUpdateResponsavel}>
                    <form onSubmit={handleUpdateResponsavel}>
                        <div className="mb-3 input-group">
                            <label htmlFor="nome" className="input-group-text">Nome: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="nome"
                                id="nome"
                                value={formData.nome}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3 input-group">
                            <label htmlFor="responsavelcpf" className="input-group-text">CPF: </label>
                            <input
                                type="text"
                                className="form-control"
                                name="responsavelcpf"
                                id="responsavelcpf"
                                value={formData.responsavelcpf}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3 input-group">
                            <label htmlFor="pacotes"></label>
                            <input
                                type="number"
                                className='form-control'
                                name="pacotes"
                                id="pacotes"
                                value={formData.pacotes}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Atualizar</button>
                    </form>

                    <button type="submit" className='btn btn-primary'>Atualizar</button>
                </form>
            </div>
        </>
    );
};

export default AtualizarBeneficiado;
