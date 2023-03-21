import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'
import { Request, Response } from "express";
import { BadRequestError, UnauthorizedError } from '../helpers/api-error';
import { CreateUserService } from './../services/create-user-service';

export class UserController{
    async createUserName(req: Request, res: Response){
        const prisma = new PrismaClient()
        const {user_name, password} = req.body

        if(user_name.length > 10){
            throw new UnauthorizedError('The user must be up to 10 characters!')
        }
        
        const userExist = await prisma.user.findUnique({
            where: {
                user: user_name
            }
        })

        if(userExist){
            throw new BadRequestError('The user exists in the database')
        }

        const createNewUser = new CreateUserService()
        const hashUser = await bcrypt.hash(password, 10)
                                                                                                                             
        const crete = createNewUser.createUser(user_name, hashUser)
                  
        return res.status(201).json({user: (await crete).user})
    }
}