-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT,
    "createdAd" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
