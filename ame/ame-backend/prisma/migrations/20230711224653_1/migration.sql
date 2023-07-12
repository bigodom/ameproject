-- CreateTable
CREATE TABLE "Responsavel" (
    "responsavelcpf" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "pacotes" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Beneficiado" (
    "beneficiadocpf" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "faixa_etaria" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "responsavelcpf" TEXT NOT NULL,
    "data_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" DATETIME NOT NULL,
    CONSTRAINT "Beneficiado_responsavelcpf_fkey" FOREIGN KEY ("responsavelcpf") REFERENCES "Responsavel" ("responsavelcpf") ON DELETE RESTRICT ON UPDATE CASCADE
);
