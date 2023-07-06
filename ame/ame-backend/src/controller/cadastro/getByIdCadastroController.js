import { prisma } from '../../database/client.js'

export async function getByIdCadastroController(req, res) {
  const { id } = req.params;

  try {
    const cadastro = await prisma.cadastro.findUnique({
      where: {
        id
      },
      include: {
        beneficiado: true,
      }
    });

    if (!cadastro) {
      return res.status(404).json({ error: 'cadastro não encontrado' });
    }

    return res.status(200).json(beneficiado);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}