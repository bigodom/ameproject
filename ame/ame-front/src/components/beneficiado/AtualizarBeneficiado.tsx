import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';

interface BeneficiadoFormData {
    registro: number;
    nome: string;
    beneficiadocpf: string;
    data_nascimento: string;
    genero: string;
    telefone: string;
    email: string;
    cep: string;
    faixa_etaria: string;
    endereco: string;
    bairro: string;
    responsavelcpf: string;
}

const AtualizarBeneficiado = () => {
    const { beneficiadocpf } = useParams(); // Parâmetro dinâmico da URL
    const [formData, setFormData] = useState<BeneficiadoFormData>({
        registro: 0,
        nome: '',
        beneficiadocpf: '',
        data_nascimento: '',
        genero: '',
        telefone: '',
        email: '',
        cep: '',
        faixa_etaria: '',
        endereco: '',
        bairro:'',
        responsavelcpf: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchBeneficiado() {
            try {
                const response = await api.get(`/beneficiado/${beneficiadocpf}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Erro ao buscar o beneficiado:', error);
            }
        }

        fetchBeneficiado();
    }, [beneficiadocpf]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;

        const parsedValue = name === 'registro' ? parseInt(value) : value;

        setFormData({ ...formData, [name]: parsedValue });
    };

    const handleUpdateBeneficiado = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { registro, nome, beneficiadocpf, data_nascimento, genero, telefone, email, cep, faixa_etaria, endereco, bairro, responsavelcpf } = formData;

        const data = {
            registro,
            nome,
            beneficiadocpf,
            data_nascimento,
            genero,
            telefone,
            email,
            cep,
            faixa_etaria,
            endereco,
            bairro,
            responsavelcpf,
        };

        try {
            await api.put(`/beneficiado/${beneficiadocpf}`, data);
            alert('Beneficiado atualizado com sucesso!');
            navigate('/listarbeneficiados');
        } catch (error) {
            alert('Erro ao atualizar beneficiado!');
        }
    };

    return (
        <>
          <h1 className='text-center'>Cadastrar Beneficiado</h1>
          <div className='container d-flex justify-content-center align-items-center'>
    
            <form onSubmit={handleUpdateBeneficiado}>
              <div className="mb-3 input-group">
                <label htmlFor="registro" className="input-group-text">
                  Número de Registro:
                </label>
                <input
                  type="text"
                  className='form-control'
                  id="registro"
                  name="registro"
                  value={formData.registro}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 input-group">
                <label htmlFor="beneficiadocpf" className="input-group-text">
                  CPF:
                </label>
                <input
                  type="text"
                  className='form-control'
                  id="beneficiadocpf"
                  name="beneficiadocpf"
                  value={formData.beneficiadocpf}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 input-group">
                <label htmlFor="nome" className="input-group-text">Nome:</label>
                <input
                  type="text"
                  className='form-control'
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 input-group">
                <label htmlFor="data_nascimento" className="input-group-text">Data de Nascimento:</label>
                <input
                  type="date"
                  className='form-control'
                  id="data_nascimento"
                  name="data_nascimento"
                  value={formData.data_nascimento}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 input-group">
                <label htmlFor="genero" className="input-group-text">Gênero:</label>
                <select name="genero" id="genero" className='form-select' onChange={handleInputChange}>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Não Binário">Não Binário</option>
                </select>
              </div>
              <div className="mb-3 input-group">
                <label htmlFor="telefone" className="input-group-text">Telefone:</label>
                <input
                  type="text"
                  className='form-control'
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 input-group">
                <label htmlFor="email" className="input-group-text">E-mail:</label>
                <input
                  type="email"
                  className='form-control'
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 input-group">
                <label htmlFor="cep" className="input-group-text">CEP:</label>
                <input
                  type="text"
                  className='form-control'
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3 input-group">
                <label htmlFor="faixa_etaria" className="input-group-text">Faixa Etária:</label>
                <select name="faixa_etaria" className='form-select' id='faixa_etaria' onChange={handleInputChange}>
                  <option value="Idoso">Idoso</option>
                  <option value="Adulto">Adulto</option>
                  <option value="Criança">Criança</option>
                </select>
              </div>
              <div className="mb-3 input-group">
                <label htmlFor="endereco" className="input-group-text">Endereço:</label>
                <input
                  type="text"
                  className='form-control'
                  id="endereco"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleInputChange}
                />
              </div>
              <div className='mb-3 input-group'>
                <label htmlFor="bairro" className='input-group-text'>Bairro</label>
                <input type="text" name='bairro' className='form-control' value={formData.bairro} onChange={handleInputChange} />
              </div>
              <button type="submit" className="btn btn-primary">Cadastrar Beneficiado</button>
            </form>
          </div>
        </>
    );
};

export {AtualizarBeneficiado};
