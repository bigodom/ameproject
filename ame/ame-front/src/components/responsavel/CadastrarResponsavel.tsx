import React, { useState } from 'react'
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';

interface ResponsavelFormData {
  nome: string;
  responsavelcpf: string;
}

const CadastrarResponsavel = () => {
  const [formData, setFormData] = useState<ResponsavelFormData>({
    nome: '',
    responsavelcpf: '',
  })

  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  const handleNewResponsavel = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { nome, responsavelcpf } = formData

    const data = {
      nome,
      responsavelcpf,
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
    <div>
      <h1>Cadastrar Responsavel</h1>
      <form onSubmit={handleNewResponsavel}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="responsavelcpf">CPF</label>
          <input
            type="text"
            name="responsavelcpf"
            id="responsavelcpf"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}

export { CadastrarResponsavel }