import { PrismaClient, User } from ".prisma/client";
import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-error";
import { CreateCheckOutService } from "../services/create-check-out-service";

export class CheckOutController{
    async createCheckOut(req: Request, res: Response){
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


        const createCheckOutTime = new CreateCheckOutService()
        const timeCreted = createCheckOutTime.createCheckOut(dateTime, id_user)

        res.send({check_out: (await timeCreted).check_out})
    }   
}