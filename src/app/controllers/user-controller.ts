import { CreateUserService } from './../services/create-user-service';
import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { BadRequestError, UnauthorizedError } from '../helpers/api-error';

export class UserController{
    async createUserName(req: Request, res: Response){
        const prisma = new PrismaClient()
        const {user_name} = req.body

        if(typeof user_name != 'string'){
            throw new UnauthorizedError('The user must be up to 10 characters!')
        }

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
        const hashUser = await bcrypt.hash(user_name, 10)

        createNewUser.createUser(hashUser)
        return res.status(201).json({message: 'User created!'})
    }
}