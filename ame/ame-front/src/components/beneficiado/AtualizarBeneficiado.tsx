import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';

interface BeneficiadoFormData {
    nome: string;
    data_nascimento: string;
    genero: string;
    telefone: string;
    email: string;
    cep: string;
    faixa_etaria: string;
    endereco: string;
}

const AtualizarBeneficiado = () => {
    const [formData, setFormData] = useState<BeneficiadoFormData>({
        nome: '',
        data_nascimento: '',
        genero: '',
        telefone: '',
        email: '',
        cep: '',
        faixa_etaria: '',
        endereco: '',
    });

    const { cpf } = useParams(); // Parâmetro dinâmico da URL
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchBeneficiado() {
            try {
                const response = await api.get(`/beneficiados/${cpf}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Erro ao buscar o beneficiado:', error);
            }
        }

        fetchBeneficiado();
    }, [cpf]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdateBeneficiado = async (event: React.FormEvent<HTMLFormElement>) => {
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
                <form onSubmit={handleUpdateBeneficiado}>

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
                        <label htmlFor="data_nascimento" className="input-group-text">Data de Nascimento: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="data_nascimento"
                            id="data_nascimento"
                            value={formData.data_nascimento}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3 input-group">
                        
                    </div>
                    <button type="submit" className="btn btn-primary">Atualizar</button>
                </form>
            </div>
        </>
    );
};

export default AtualizarBeneficiado;
