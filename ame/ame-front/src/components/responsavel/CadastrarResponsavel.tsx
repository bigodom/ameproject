import React, { useState } from 'react'
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

interface ResponsavelFormData {
  nome: string;
  responsavelcpf: string;
  pacotes: number;
}

const CadastrarResponsavel = () => {
  const [formData, setFormData] = useState<ResponsavelFormData>({
    nome: '',
    responsavelcpf: '',
    pacotes: 0,
  })

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    const parsedValue = name === 'pacotes' ? parseInt(value) : value;

    setFormData({ ...formData, [name]: parsedValue })
  }

  const handleNewResponsavel = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { nome, responsavelcpf, pacotes } = formData

    const data = {
      responsavelcpf,
      nome,
      pacotes,
    }

    console.log(data)
    try {
      await api.post('/responsavel', data);
      alert('Responsável cadastrado com sucesso!');
      navigate('/listarresponsaveis')
    } catch (error) {
      alert('Erro ao cadastrar responsável!');
    }
  };

  return (
    <>
    <h1 className='text-center'>Cadastrar Responsavel</h1>
    <div className='container d-flex justify-content-center align-items-center'>
      <form onSubmit={handleNewResponsavel}>
        <div className="mb-3 input-group">
          <label htmlFor="nome" className="input-group-text">Nome: </label>
          <input
            type="text"
            className='form-control'
            name="nome"
            id="nome"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3 input-group">
          <label htmlFor="responsavelcpf" className="input-group-text">CPF: </label>
          <input
            type="text"
            className='form-control'
            name="responsavelcpf"
            id="responsavelcpf"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3 input-group">
          <label htmlFor="pacotes" className="input-group-text">Pacotes: </label>
          <input
            type="number"
            className='form-control'
            name="pacotes"
            id="pacotes"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className='btn btn-primary'>Cadastrar</button>
      </form>
    </div>
    </>
  );
};

export { CadastrarResponsavel }