import { prisma } from '../../database/client.js'

export async function createBeneficiadoController(req, res) {
  const { beneficiadocpf, nome, data_nascimento, genero, telefone, email, cep, faixa_etaria, endereco, responsavelcpf } = req.body;

  try {
    const beneficiado = await prisma.beneficiado.create({
      data: {
        beneficiadocpf,
        nome,
        data_nascimento,
        genero,
        telefone,
        email,
        cep,
        faixa_etaria,
        endereco,
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