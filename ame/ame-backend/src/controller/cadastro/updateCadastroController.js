import { prisma } from '../../database/client.js'

export async function updateCadastroController(req, res) {
  const { id } = req.params;
  const { data_cadastro, beneficiadocpf } = req.body;

  try {
    const cadastro = await prisma.cadastro.update({
      where: {
        id
      },
      data: {
        data_cadastro: data_cadastro,
        beneficiado: {
          connect: {
            beneficiadocpf: beneficiadocpf
          }
        }
      }
    });
    return res.status(200).json(cadastro);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}