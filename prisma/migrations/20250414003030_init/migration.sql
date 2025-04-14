/*
  Warnings:

  - You are about to drop the column `atualizadoEm` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the column `criadoEm` on the `Vehicle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Vehicle` DROP COLUMN `atualizadoEm`,
    DROP COLUMN `criadoEm`,
    ADD COLUMN `createdAtDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    ADD COLUMN `updatedAtDate` TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);
