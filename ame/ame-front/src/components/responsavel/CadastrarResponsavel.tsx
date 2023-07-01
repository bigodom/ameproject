import React, { useState } from 'react'

interface ResponsavelFormData {
  nome: string;
  responsavelcpf: string;
}

const CadastrarResponsavel = () => {
  const [formData, setFormData] = useState<ResponsavelFormData>({
    nome: '',
    responsavelcpf: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  const handleNewResponsavel = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { nome, responsavelcpf } = formData

    const data = {
      nome,
      responsavelcpf,
    }

    console.log(data)

    alert('Responsavel cadastrado com sucesso!')
  }

  return (
    <div>
      <h1>Cadastrar Responsavel</h1>
      <form>
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