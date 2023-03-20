import { PrismaClient, User } from ".prisma/client";
import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-error";
import { CreateCheckInService } from "../services/create-check-in-service";

export class CheckInController{
    async createCheckIn(req: Request, res: Response){
        const prisma = new PrismaClient()
        const {id_user} = req.user as User
        const dateTime = new Date()
    
        const userExist = await prisma.user.findUnique({
            where: {
                id_user
            }
        })

        if(!userExist){
            throw new BadRequestError('The user not exists in the database')
        }

        const createCheckInTime = new CreateCheckInService()
        const timeCreted = createCheckInTime.createCheckIn(dateTime, id_user)

        return res.json({check_in: (await timeCreted).check_in})
    }   
}