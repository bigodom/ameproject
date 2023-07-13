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
    <div className='modal'>
      <h1>Cadastrar Responsavel</h1>
      <form onSubmit={handleNewResponsavel}>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="responsavelcpf">CPF: </label>
          <input
            type="text"
            name="responsavelcpf"
            id="responsavelcpf"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="pacotes">Pacotes: </label>
          <input
            type="number"
            name="pacotes"
            id="pacotes"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export { CadastrarResponsavel }