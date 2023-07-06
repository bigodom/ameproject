import { prisma } from '../../database/client.js'

export async function getAllCadastroController(req, res) {
  try {
    const cadastro = await prisma.cadastro.findMany({
      include: {
        beneficiado: true,
      }
    });
    res.status(200).json(cadastro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}