import { PrismaClient } from "@prisma/client";

export class CreateUserService{
    async createUser(user: string){
        const prisma = new PrismaClient()

        const newUser = 
            await prisma
            .user
            .create({
                data: {
                    user
                }
            })

        return newUser
    }
}