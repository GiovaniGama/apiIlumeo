import { Router } from "express";
import { LoginController } from "../controllers/login-controller";
import { UserController } from "../controllers/user-controller";
import { authMiddleware } from "../middlewares/authMiddleware";
import { WorkScheduleController } from "../controllers/work-schedule-controller";

const objectRouter = Router()

const userController = new UserController()
const loginUser = new LoginController()
const workScheduleController = new WorkScheduleController

objectRouter.post('/user', userController.createUserName)
objectRouter.post('/login', loginUser.loginUser)
objectRouter.use(authMiddleware)
objectRouter.get('/profile', loginUser.getProfile)
objectRouter.get('/schedule', workScheduleController.getWorkSchedule)
objectRouter.post('/create-schedule', workScheduleController.createWorkSchedule)

export { objectRouter }