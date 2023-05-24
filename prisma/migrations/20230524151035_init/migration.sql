-- CreateTable
CREATE TABLE "Mamiferos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "extinct" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Mamiferos_pkey" PRIMARY KEY ("id")
);
