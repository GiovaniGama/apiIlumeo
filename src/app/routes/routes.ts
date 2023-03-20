import { Router } from "express";
import { LoginController } from "../controllers/login-controller";
import { UserController } from "../controllers/user-controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const objectRouter = Router()

const userController = new UserController()
const loginUser = new LoginController()

objectRouter.post('/user', userController.createUserName)
objectRouter.post('/login', loginUser.loginUser)
objectRouter.use(authMiddleware)
objectRouter.get('/auth', loginUser.getProfile)

export { objectRouter }