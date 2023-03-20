import { PrismaClient } from "@prisma/client";

export class CreateCheckOutService{
    async createCheckOut(check_out: Date, userId: number){
        const prisma = new PrismaClient()
    
        const newCheck_out = 
            await prisma
            .checkOut
            .create({
                data: {
                    check_out,
                    userId
                }
            })
        
        return newCheck_out
    }
}