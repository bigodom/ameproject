/*
  Warnings:

  - Added the required column `bairro` to the `Beneficiado` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Beneficiado" (
    "beneficiadocpf" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "faixa_etaria" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "responsavelcpf" TEXT NOT NULL,
    "data_cadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_atualizacao" DATETIME NOT NULL,
    CONSTRAINT "Beneficiado_responsavelcpf_fkey" FOREIGN KEY ("responsavelcpf") REFERENCES "Responsavel" ("responsavelcpf") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Beneficiado" ("beneficiadocpf", "cep", "data_atualizacao", "data_cadastro", "data_nascimento", "email", "endereco", "faixa_etaria", "genero", "nome", "responsavelcpf", "telefone") SELECT "beneficiadocpf", "cep", "data_atualizacao", "data_cadastro", "data_nascimento", "email", "endereco", "faixa_etaria", "genero", "nome", "responsavelcpf", "telefone" FROM "Beneficiado";
DROP TABLE "Beneficiado";
ALTER TABLE "new_Beneficiado" RENAME TO "Beneficiado";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
