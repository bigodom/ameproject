import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';

interface ResponsavelFormData {
  nome: string;
  responsavelcpf: string;
  pacotes: number;
}

const AtualizarResponsavel = () => {
  const { responsavelcpf } = useParams(); // Parâmetro dinâmico da URL
  const [formData, setFormData] = useState<ResponsavelFormData>({
    nome: '',
    responsavelcpf: '',
    pacotes: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchResponsavel() {
      try {
        const response = await api.get(`/responsavel/${responsavelcpf}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Erro ao buscar o responsável:', error);
      }
    }

    fetchResponsavel();
  }, [responsavelcpf]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const parsedValue = name === 'pacotes' ? parseInt(value) : value;

    setFormData({ ...formData, [name]: parsedValue });
  };

  const handleUpdateResponsavel = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { nome, responsavelcpf, pacotes } = formData;

    const data = {
      nome,
      responsavelcpf,
      pacotes,
    };

    console.log(data);
    try {
      await api.put(`/responsavel/${responsavelcpf}`, data);
      alert('Responsável atualizado com sucesso!');
      navigate('/listarresponsaveis');
    } catch (error) {
      alert('Erro ao atualizar responsável!');
    }
  };

  return (
    <>
      <h1 className="text-center">Atualizar Responsável</h1>
      <div className="container d-flex justify-content-center align-items-center">
        <form onSubmit={handleUpdateResponsavel}>
          <div className="mb-3 input-group">
            <label htmlFor="nome" className="input-group-text">
              Nome:
            </label>
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
            <label htmlFor="responsavelcpf" className="input-group-text">
              CPF:
            </label>
            <input
              type="text"
              className="form-control"
              name="responsavelcpf"
              id="responsavelcpf"
              value={formData.responsavelcpf}
              onChange={handleInputChange}
              disabled // Desabilita a edição do CPF
            />
          </div>
          <div className="mb-3 input-group">
            <label htmlFor="pacotes" className="input-group-text">
              Pacotes:
            </label>
            <input
              type="number"
              className="form-control"
              name="pacotes"
              id="pacotes"
              value={formData.pacotes}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Atualizar
          </button>
        </form>
      </div>
    </>
  );
};

export {AtualizarResponsavel};
