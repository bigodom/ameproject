import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

interface BeneficiadoFormData {
  registro: number;
  beneficiadocpf: string;
  nome: string;
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

const CadastrarBeneficiado = () => {
  const [formValues, setFormValues] = useState<BeneficiadoFormData>({
    registro: 0,
    beneficiadocpf: '',
    nome: '',
    data_nascimento: '',
    genero: '',
    telefone: '',
    email: '',
    cep: '',
    faixa_etaria: '',
    endereco: '',
    bairro: '',
    responsavelcpf: '',
  });
  const [responsavelNome, setResponsavelNome] = useState('');

  const navigate = useNavigate();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    const parsedValue = name === 'registro' ? parseInt(value) : value;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: parsedValue,
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
    const { registro, beneficiadocpf, nome, data_nascimento, genero, telefone, email, cep, faixa_etaria, endereco, bairro, responsavelcpf } = formValues;

    const data = {
      registro,
      beneficiadocpf,
      nome,
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
    <>
      <h1 className='text-center'>Cadastrar Beneficiado</h1>
      <div className='container d-flex justify-content-center align-items-center'>

        <form onSubmit={handleNewBeneficiado}>
          <div className="mb-3 input-group">
            <label htmlFor="registro" className="input-group-text">
              Número de Registro:
            </label>
            <input
              type="text"
              className='form-control'
              id="registro"
              name="registro"
              value={formValues.registro}
              onChange={handleChange}
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
              value={formValues.beneficiadocpf}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 input-group">
            <label htmlFor="nome" className="input-group-text">Nome:</label>
            <input
              type="text"
              className='form-control'
              id="nome"
              name="nome"
              value={formValues.nome}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 input-group">
            <label htmlFor="data_nascimento" className="input-group-text">Data de Nascimento:</label>
            <input
              type="date"
              className='form-control'
              id="data_nascimento"
              name="data_nascimento"
              value={formValues.data_nascimento}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 input-group">
            <label htmlFor="genero" className="input-group-text">Gênero:</label>
            <select name="genero" id="genero" className='form-select' onChange={handleChange} defaultValue="Masculino">
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
              value={formValues.telefone}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 input-group">
            <label htmlFor="email" className="input-group-text">E-mail:</label>
            <input
              type="email"
              className='form-control'
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 input-group">
            <label htmlFor="cep" className="input-group-text">CEP:</label>
            <input
              type="text"
              className='form-control'
              id="cep"
              name="cep"
              value={formValues.cep}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 input-group">
            <label htmlFor="faixa_etaria" className="input-group-text">Faixa Etária:</label>
            <select name="faixa_etaria" className='form-select' id='faixa_etaria' onChange={handleChange} defaultValue="Idoso">
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
              value={formValues.endereco}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3 input-group'>
            <label htmlFor="bairro" className='input-group-text'>Bairro</label>
            <input type="text" name='bairro' className='form-control' value={formValues.bairro} onChange={handleChange} />
          </div>
          <div className="mb-3 input-group">
            <label htmlFor="responsavelcpf" className="input-group-text">CPF do Responsável:</label>
            <input
              type="text"
              className='form-control'
              id="responsavelcpf"
              name="responsavelcpf"
              value={formValues.responsavelcpf}
              onChange={handleChange}
            />
            <span className="input-group-text">{responsavelNome}</span>
          </div>
          <button type="submit" className="btn btn-primary">Cadastrar Beneficiado</button>
        </form>
      </div>
    </>
  );
};

export { CadastrarBeneficiado };
