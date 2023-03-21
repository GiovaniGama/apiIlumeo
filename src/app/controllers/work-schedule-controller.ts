import { PrismaClient, User } from ".prisma/client";
import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-error";
import { WorkScheduleService } from "../services/work-schedule-service";

const prisma = new PrismaClient()
export class WorkScheduleController{
    async createWorkSchedule(req: Request, res: Response){
        const {id_user} = req.user as User
        const {date_check_in, date_check_out} = req.body
    
        const userExist = await prisma.user.findUnique({
            where: {
                id_user
            }
        })

        if(!userExist){
            throw new BadRequestError('The user not exists in the database')
        }

        const createWorkSchedule = new WorkScheduleService()
        const timeCreted = createWorkSchedule.createWorkSchedule(date_check_in, date_check_out, id_user)

        return res.json({
            check_in: (await timeCreted).date_check_in, 
            check_out: (await timeCreted).date_check_out
        })
    } 
    
    async getWorkSchedule(req: Request, res: Response){
        const {id_user} = req.user as User

        const userExist = await prisma.user.findUnique({
            where: {
                id_user
            }
        })

        if(!userExist){
            throw new BadRequestError('The user not exists in the database')
        }

        const userSchedule = await prisma.workSchedule.findMany({
            where:{
                id_user
            }
        })

        return res.json(userSchedule)
    }
}