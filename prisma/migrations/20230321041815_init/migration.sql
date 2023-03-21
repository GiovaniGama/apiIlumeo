-- CreateTable
CREATE TABLE "User" (
    "id_user" SERIAL NOT NULL,
    "user" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "workSchedule" (
    "id_schedule" SERIAL NOT NULL,
    "date_check_in" TIMESTAMP(3) NOT NULL,
    "date_check_out" TIMESTAMP(3) NOT NULL,
    "id_user" INTEGER NOT NULL,

    CONSTRAINT "workSchedule_pkey" PRIMARY KEY ("id_schedule")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_key" ON "User"("user");

-- AddForeignKey
ALTER TABLE "workSchedule" ADD CONSTRAINT "workSchedule_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;
