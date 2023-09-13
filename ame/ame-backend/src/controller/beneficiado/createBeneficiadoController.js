import { prisma } from '../../database/client.js'

export async function createBeneficiadoController(req, res) {
  const { registro, beneficiadocpf, nome, data_nascimento, genero, telefone, email, cep, faixa_etaria, endereco, bairro, responsavelcpf } = req.body;

  try {
    const beneficiado = await prisma.beneficiado.create({
      data: {
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
        responsavel: {
          connect: {
            responsavelcpf: responsavelcpf
          }
        }
      }
    });

    return res.status(201).json(beneficiado);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}