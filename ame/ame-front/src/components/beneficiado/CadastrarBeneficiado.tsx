import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

interface BeneficiadoFormData {
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
};

const CadastrarBeneficiado = () => {
  const [formValues, setFormValues] = useState<BeneficiadoFormData>({
    beneficiadocpf: '',
    nome: '',
    data_nascimento: '',
    genero: '',
    telefone: '',
    email: '',
    cep: '',
    faixa_etaria: '',
    endereco: '',
    responsavelcpf: '',
  });
  const [responsavelNome, setResponsavelNome] = useState('');

  const navigate = useNavigate();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === 'responsavelcpf') {
      try {
        const responsavel = await fetchResponsavelNome(value);
        setResponsavelNome(responsavel.nome);
      } catch (error) {
        setResponsavelNome('');
      }
    }
  };

  const fetchResponsavelNome = async (cpf: string) => {
    // Faça uma chamada à API para buscar o nome do responsável com base no CPF fornecido
    // Substitua 'sua-api.com' pela URL correta da sua API
    const response = await api.get(`/responsavel/${cpf}`);
    return response.data;
  };

  const handleNewBeneficiado = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { beneficiadocpf, nome, data_nascimento, genero, telefone, email, cep, faixa_etaria, endereco, responsavelcpf } = formValues;

    const data = {
      beneficiadocpf,
      nome,
      data_nascimento,
      genero,
      telefone,
      email,
      cep,
      faixa_etaria,
      endereco,
      responsavelcpf,
    };

    console.log(data);
    try {
      await api.post('/beneficiado', data);
      alert('Beneficiado cadastrado com sucesso!');
      navigate('/listarbeneficiados');
    } catch (error) {
      alert('Erro ao cadastrar beneficiado!' + error);

    }
  };

  return (
    <div className='modal'>
      <form onSubmit={handleNewBeneficiado}>
        <div>
          <label htmlFor="beneficiadocpf">CPF:</label>
          <input
            type="text"
            id="beneficiadocpf"
            name="beneficiadocpf"
            value={formValues.beneficiadocpf}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formValues.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="data_nascimento">Data de Nascimento:</label>
          <input
            type="date"
            id="data_nascimento"
            name="data_nascimento"
            value={formValues.data_nascimento}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="genero">Gênero:</label>
          <input
            type="text"
            id="genero"
            name="genero"
            value={formValues.genero}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            value={formValues.telefone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={formValues.cep}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="faixa_etaria">Faixa Etária:</label>
          <input
            type="text"
            id="faixa_etaria"
            name="faixa_etaria"
            value={formValues.faixa_etaria}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="endereco">Endereço:</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formValues.endereco}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="responsavelcpf">CPF do Responsável:</label>
          <input
            type="text"
            id="responsavelcpf"
            name="responsavelcpf"
            value={formValues.responsavelcpf}
            onChange={handleChange}
          />
          <span>{responsavelNome}</span>
        </div>
        <button type="submit">Cadastrar Beneficiado</button>
      </form>
    </div>
  );
};

export { CadastrarBeneficiado };
