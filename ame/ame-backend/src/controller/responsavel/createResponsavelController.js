import { prisma } from '../../database/client.js'

export async function createResponsavelController(req, res) {
  const { responsavelcpf, nome } = req.body;

  try {
    const responsavel = await prisma.responsavel.create({
      data: {
        responsavelcpf,
        nome,
      }
    });

    return res.status(201).json(responsavel);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}