import requests
import pandas as pd

def get_data_from_api(url):
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print(f"Failed to retrieve data from {url}. Status code: {response.status_code}")
        return None

def merge_data(beneficiados, responsaveis):
    merged_data = []
    for beneficiado in beneficiados:
        cpf_responsavel = beneficiado["responsavelcpf"]
        responsavel = next((resp for resp in responsaveis if resp["responsavelcpf"] == cpf_responsavel), None)
        if responsavel:
            merged_data.append({
                "Nome Beneficiado": beneficiado["nome"],
                "CPF Beneficiado": beneficiado["beneficiadocpf"],
                "Data de Nascimento": beneficiado["data_nascimento"],
                "Gênero": beneficiado["genero"],
                "Telefone": beneficiado["telefone"],
                "Email": beneficiado["email"],
                "CEP": beneficiado["cep"],
                "Faixa Etária": beneficiado["faixa_etaria"],
                "Endereço": beneficiado["endereco"],
                "Data de Cadastro": beneficiado["data_cadastro"],
                "Nome Responsável": responsavel["nome"],
                "CPF Responsável": cpf_responsavel,
                "Pacotes": responsavel["pacotes"],
            })
    return merged_data


if __name__ == "__main__":
    base_url = "http://localhost:3000"
    beneficiados_endpoint = f"{base_url}/beneficiados"
    responsaveis_endpoint = f"{base_url}/responsaveis"

    beneficiados_data = get_data_from_api(beneficiados_endpoint)
    responsaveis_data = get_data_from_api(responsaveis_endpoint)

    if beneficiados_data and responsaveis_data:
        merged_data = merge_data(beneficiados_data, responsaveis_data)
        if merged_data:
            df = pd.DataFrame(merged_data)
            output_file = "beneficiados_responsaveis.xlsx"
            df.to_excel(output_file, index=False)
            print(f"Planilha gerada com sucesso: {output_file}")
        else:
            print("Nenhum dado foi combinado.")
    else:
        print("Falha ao obter os dados da API.")
