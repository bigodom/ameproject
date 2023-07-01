import { prisma } from '../../database/client.js'

export async function deleteBeneficiadoController(req, res) {
  const { beneficiadocpf } = req.params;

  try {
    const beneficiado = await prisma.beneficiado.delete({
      where: {
        beneficiadocpf
      }
    });

    return res.status(200).json(beneficiado);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}