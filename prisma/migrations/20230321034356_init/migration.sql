/*
  Warnings:

  - You are about to drop the `CheckIn` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CheckOut` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CheckIn" DROP CONSTRAINT "CheckIn_userId_fkey";

-- DropForeignKey
ALTER TABLE "CheckOut" DROP CONSTRAINT "CheckOut_userId_fkey";

-- DropTable
DROP TABLE "CheckIn";

-- DropTable
DROP TABLE "CheckOut";

-- CreateTable
CREATE TABLE "workSchedule" (
    "id_schedule" SERIAL NOT NULL,
    "date_check_in" TIMESTAMP(3) NOT NULL,
    "date_check_out" TIMESTAMP(3) NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "workSchedule_pkey" PRIMARY KEY ("id_schedule")
);

-- AddForeignKey
ALTER TABLE "workSchedule" ADD CONSTRAINT "workSchedule_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
