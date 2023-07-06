-- CreateTable
CREATE TABLE "Responsavel" (
    "responsavelcpf" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
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
    CONSTRAINT "Beneficiado_responsavelcpf_fkey" FOREIGN KEY ("responsavelcpf") REFERENCES "Responsavel" ("responsavelcpf") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cadastro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "beneficiadocpf" TEXT NOT NULL,
    CONSTRAINT "Cadastro_beneficiadocpf_fkey" FOREIGN KEY ("beneficiadocpf") REFERENCES "Beneficiado" ("beneficiadocpf") ON DELETE RESTRICT ON UPDATE CASCADE
);
