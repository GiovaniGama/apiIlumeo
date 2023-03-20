import { PrismaClient } from "@prisma/client";

export class CreateUserService{
    async createUser(user: string, password: string){
        const prisma = new PrismaClient()

        const newUser = 
            await prisma
            .user
            .create({
                data: {
                    user:user,
                    password: password
                }
            })

        return newUser
    }
}