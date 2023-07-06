import { prisma } from '../../database/client.js'

export async function deleteCadastroController(req, res) {
  const { id } = req.params;

  try {
    const cadastro = await prisma.cadastro.delete({
      where: {
        id
      }
    });

    return res.status(200).json(cadastro);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}