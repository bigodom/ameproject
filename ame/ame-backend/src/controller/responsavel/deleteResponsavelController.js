import { prisma } from '../../database/client.js'

export async function deleteResponsavelController(req, res) {
  const { responsavelcpf } = req.params;

  try {
    const responsavel = await prisma.responsavel.delete({
      where: {
        responsavelcpf
      }
    });

    return res.status(200).json(responsavel);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}