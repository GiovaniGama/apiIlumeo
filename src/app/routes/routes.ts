import { Router } from "express";
import { UserController } from "../controllers/user-controller";

const objectRouter = Router()

const userController = new UserController()

objectRouter.post('/user', userController.createUserName)

export { objectRouter }