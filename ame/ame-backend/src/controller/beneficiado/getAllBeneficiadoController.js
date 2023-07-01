import { prisma } from '../../database/client.js'

export async function getAllBeneficiadoController(req, res) {
  try {
    const beneficiado = await prisma.beneficiado.findMany({
      include: {
        responsavel: true,
      }
    });
    res.status(200).json(beneficiado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}