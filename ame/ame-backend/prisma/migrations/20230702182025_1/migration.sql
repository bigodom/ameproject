-- CreateTable
CREATE TABLE "Responsavel" (
    "responsavelcpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Responsavel_pkey" PRIMARY KEY ("responsavelcpf")
);

-- CreateTable
CREATE TABLE "Beneficiado" (
    "beneficiadocpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "genero" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "faixa_etaria" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "responsavelcpf" TEXT NOT NULL,

    CONSTRAINT "Beneficiado_pkey" PRIMARY KEY ("beneficiadocpf")
);

-- CreateTable
CREATE TABLE "Cadastro" (
    "id" SERIAL NOT NULL,
    "data_cadastro" TIMESTAMP(3) NOT NULL,
    "beneficiadocpf" TEXT NOT NULL,

    CONSTRAINT "Cadastro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Beneficiado" ADD CONSTRAINT "Beneficiado_responsavelcpf_fkey" FOREIGN KEY ("responsavelcpf") REFERENCES "Responsavel"("responsavelcpf") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cadastro" ADD CONSTRAINT "Cadastro_beneficiadocpf_fkey" FOREIGN KEY ("beneficiadocpf") REFERENCES "Beneficiado"("beneficiadocpf") ON DELETE RESTRICT ON UPDATE CASCADE;
