import { PrismaClient } from "@prisma/client";

export class CreateCheckInService{
    async createCheckIn(check_in: Date, userId: number){
        const prisma = new PrismaClient()
    
        const newCheck_in = 
            await prisma
            .checkIn
            .create({
                data: {
                    check_in,
                    userId
                }
            })
        
        return newCheck_in
    }
}