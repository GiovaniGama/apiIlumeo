import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-error";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


export class LoginController{
    async loginUser(req: Request, res: Response){
        const prisma = new PrismaClient()
        const { user_name, password } = req.body

        const userExist = await prisma.user.findUnique({
            where: {
                user: user_name
            }
        })
        
        if(!userExist){
            throw new BadRequestError('User or password invalid!')
        }

        const verifyPass = await bcrypt.compare(password, userExist.password)

        if(!verifyPass){
            throw new BadRequestError('User or password invalid!')
        }

        const token = jwt.sign({ id: userExist.id_user}, process.env.JWT_PASS ?? '', {expiresIn: '1h'})

        const {password: _, ...userLogin} = userExist
        
        return res.json({user: userLogin, token: token})
    }

    async getProfile(req: Request, res: Response){
        return res.json(req.user)
    }
}