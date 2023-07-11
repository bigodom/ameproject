import { prisma } from '../../database/client.js'

export async function updateResponsavelController(req, res) {
  const { responsavelcpf } = req.params;
  const { novocpf, nome } = req.body;

  try {
    const responsavel = await prisma.responsavel.update({
      where: {
        responsavelcpf
      },
      data: {
        responsavelcpf: novocpf,
        nome,
        pacotes
      }
    });

    return res.status(200).json(responsavel);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}