import { prisma } from '../../database/client.js'

export async function getByIdBeneficiadoController(req, res) {
  const { beneficiadocpf } = req.params;

  try {
    const beneficiado = await prisma.beneficiado.findUnique({
      where: {
        beneficiadocpf
      },
      include: {
        responsavel: true,
      }
    });

    if (!beneficiado) {
      return res.status(404).json({ error: 'Beneficiado não encontrado' });
    }

    return res.status(200).json(beneficiado);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}