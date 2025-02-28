/*
  Warnings:

  - You are about to drop the `data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "data";

-- CreateTable
CREATE TABLE "table" (
    "id" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "des" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "table_id_key" ON "table"("id");
