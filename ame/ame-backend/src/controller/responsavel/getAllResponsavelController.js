import { prisma } from '../../database/client.js'

export async function getAllResponsavelController(req, res) {
  try {
    const responsavel = await prisma.responsavel.findMany();
    res.status(200).json(responsavel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}