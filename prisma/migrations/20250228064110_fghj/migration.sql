-- CreateTable
CREATE TABLE "data" (
    "id" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "des" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "data_id_key" ON "data"("id");
