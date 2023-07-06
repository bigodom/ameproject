import { prisma } from '../../database/client.js'

export async function createCadastroController(req, res) {
  const { data_cadastro, beneficiadocpf } = req.body;

  try {
    const cadastro = await prisma.cadastro.create({
      data: {
        data_cadastro,
        beneficiado: {
          connect: {
            beneficiadocpf: beneficiadocpf
          }
        }
      }
    });

    return res.status(201).json(cadastro);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}