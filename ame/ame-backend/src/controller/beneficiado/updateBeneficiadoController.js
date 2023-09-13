import { prisma } from '../../database/client.js'

export async function updateBeneficiadoController(req, res) {
  const { beneficiadocpf } = req.params;
  const { registro, novocpf, nome, data_nascimento, genero, telefone, email, cep, faixa_etaria, endereco, bairro, responsavelcpf } = req.body;

  try {
    const beneficiado = await prisma.beneficiado.update({
      where: {
        beneficiadocpf
      },
      data: {
        registro,
        beneficiadocpf: novocpf,
        nome,
        data_nascimento,
        genero,
        telefone,
        email,
        cep,
        faixa_etaria,
        endereco,
        bairro,
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