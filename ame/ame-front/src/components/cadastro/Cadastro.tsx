import { useState } from "react";
import api from "../../services/api";

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

interface ResponsavelFormData {
    nome: string;
    responsavelcpf: string;
    pacotes: number;
}

const Cadastro = () => {
    const [beneficiadoValues, setBeneficiadoValues] = useState<BeneficiadoFormData>({
        registro: 0,
        beneficiadocpf: '',
        nome: '',
        data_nascimento: '',
        genero: 'Masculino',
        telefone: '',
        email: '',
        cep: '',
        faixa_etaria: 'Idoso',
        endereco: '',
        bairro: '',
        responsavelcpf: '',
    });

    const [responsavelNome, setResponsavelNome] = useState('');


    const handleChange = async (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        setBeneficiadoValues({
            ...beneficiadoValues,
            [name]: value
        });
        if (name === 'responsavelcpf') {
            try {
                const responsavel = await fetchResponsavelNome(value);
                setResponsavelNome(responsavel.nome + ' ' + '✅');
                console.log(responsavel.nome)
            } catch (error) {
                setResponsavelNome('');
            }
        }
    }

    const fetchResponsavelNome = async (cpf: string) => {
        const response = await api.get(`/responsavel/${cpf}`);
        return response.data;
    }

    const handleNewBeneficiado = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget);

        const data: BeneficiadoFormData = {
            registro: parseInt(formData.get('registro') as string),
            beneficiadocpf: formData.get('cpf') as string,
            nome: formData.get('nome') as string,
            data_nascimento: formData.get('data') as string,
            genero: formData.get('genero') as string,
            telefone: formData.get('telefone') as string,
            email: formData.get('email') as string,
            cep: formData.get('cep') as string,
            faixa_etaria: formData.get('faixa') as string,
            endereco: formData.get('endereco') as string,
            bairro: formData.get('bairro') as string,
            responsavelcpf: formData.get('responsavelcpf') as string,
        }

        console.log(data)
        try {
            await api.post('/beneficiado', data);
            alert('Beneficiado cadastrado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar beneficiado!');
        }
    }

    const newResponsavel = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data: ResponsavelFormData = {
            nome: formData.get('nome') as string,
            responsavelcpf: formData.get('cpf') as string,
            pacotes: parseInt(formData.get('pacotes') as string),
        }

        console.log(data)
        try {
            await api.post('/responsavel', data);
            alert('Responsável cadastrado com sucesso!');
        } catch (error) {
            alert('Erro ao cadastrar responsável!');
        }
    }

    return (
        <>
            <div className="align-center container mb-5 mt-3 justify-content-between formularios">

                <div className="flex-column cadastro">
                    <h3 className="text-center">Cadastrar Responsável</h3>
                    <form onSubmit={newResponsavel}>

                        <div className="mb-3">
                            <label htmlFor="responsavelNome" className="form-label">Nome:</label>
                            <input type="text" className="form-control" id="responsavelNome" name="nome" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="responsavelCpf" className="form-label">CPF:</label>
                            <input type="text" className="form-control" id="responsavelCpf" name="cpf" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="pacotes" className="form-label">Pacotes:</label>
                            <input type="number" className="form-control" id="pacotes" name="pacotes" />
                        </div>

                        <button type="submit" className="btn btn-primary">Cadastrar Responsável</button>
                    </form>
                </div>

                <form onSubmit={handleNewBeneficiado} className="flex-column cadastro">
                    <h3 className="text-center">Cadastrar Beneficiado</h3>

                    <div className="mb-3">
                        <label htmlFor="registro" className="form-label">Número de Registro:</label>
                        <input type="number" className="form-control" id="registro" name="registro" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome:</label>
                        <input type="text" className="form-control" id="nome" name="nome" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cpf" className="form-label">CPF:</label>
                        <input type="text" className="form-control" id="cpf" name="cpf" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="data" className="form-label">Data de Nascimento:</label>
                        <input type="date" className="form-control" id="data" name="data" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="genero" className="form-label">Gênero:</label>
                        <select className="form-select" id="genero" name="genero">
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Não Binário">Não Binário</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone:</label>
                        <input type="text" className="form-control" id="telefone" name="telefone" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cep" className="form-label">CEP:</label>
                        <input type="text" className="form-control" id="cep" name="cep" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="faixa" className="form-label">Faixa Etária:</label>
                        <select className="form-select" id="faixa" name="faixa">
                            <option value="Idoso">Idoso</option>
                            <option value="Criança">Criança</option>
                            <option value="Adolescente">Adolescente</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="endereco" className="form-label">Endereço:</label>
                        <input type="text" className="form-control" id="endereco" name="endereco" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="bairro" className="form-label">Bairro:</label>
                        <input type="text" className="form-control" id="bairro" name="bairro" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="responsavelcpf" className="form-label">CPF do Responsável:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="responsavelcpf"
                            name="responsavelcpf"
                            value={beneficiadoValues.responsavelcpf}
                            onChange={handleChange}
                        />
                        <div className="d-flex">
                        <span className="me-2">Confirme o nome do responsável: </span>
                        <span className="">{responsavelNome}</span>
                    </div>
                    </div>
                    

                    <button type="submit" className="btn btn-primary">Cadastrar Beneficiado</button>
                </form>
            </div>

        </>
    )
}

export { Cadastro }