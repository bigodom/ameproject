import { prisma } from '../../database/client.js'

export async function updateBeneficiadoController(req, res) {
  const { beneficiadocpf } = req.params;
  const { novocpf, nome, data_nascimento, genero, telefone, email, cep, faixa_etaria, endereco, responsavelcpf } = req.body;

  try {
    const beneficiado = await prisma.beneficiado.update({
      where: {
        beneficiadocpf
      },
      data: {
        beneficiadocpf: novocpf,
        nome,
        data_nascimento,
        genero,
        telefone,
        email,
        cep,
        faixa_etaria,
        endereco,
        responsavel: {
          connect: {
            responsavelcpf: responsavelcpf
          }
        }
      },
      include: {
        responsavel: true,
      }
    });

    return res.status(200).json(beneficiado);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}