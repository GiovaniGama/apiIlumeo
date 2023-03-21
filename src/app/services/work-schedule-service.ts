import { PrismaClient } from "@prisma/client";

export class WorkScheduleService{
    async createWorkSchedule(date_check_in: Date, date_check_out: Date, id_user: number){
        const prisma = new PrismaClient()
    
        const newCheck_out = 
            await prisma
            .workSchedule
            .create({
                data: {
                    date_check_in,
                    date_check_out,
                    id_user
                }
            })
        
        return newCheck_out
    }
}