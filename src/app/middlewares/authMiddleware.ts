import { NextFunction, Request, Response } from "express";
import { BadRequestError, UnauthorizedError } from "../helpers/api-error";
import jwt from 'jsonwebtoken'
import { PrismaClient } from "@prisma/client";

type JwtPayload = {
    id: number
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const prisma = new PrismaClient()
    const {authorization} = req.headers
    
    if(!authorization){
        throw new UnauthorizedError('Not authorization!')
    }

    const token = authorization.split(' ')[1]

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

    const userExist = await prisma.user.findUnique({
        where: {
            id_user: id
        }
    })

    if(!userExist){
        throw new BadRequestError('Not authorization!')
    }

    const {password: _, ...loggedUser} = userExist

    req.user = loggedUser

    next()
}