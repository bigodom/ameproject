import { prisma } from '../../database/client.js'

export async function getByIdResponsavelController(req, res) {
  const { responsavelcpf } = req.params;

  try {
    const responsavel = await prisma.responsavel.findUnique({
      where: {
        responsavelcpf
      }
    });

    if (!responsavel) {
      return res.status(404).json({ error: 'responsavel não encontrado' });
    }

    return res.status(200).json(responsavel);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}