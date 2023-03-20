import { Router } from "express";
import { CheckInController } from "../controllers/check-in-controller";
import { CheckOutController } from "../controllers/check-out-controller";
import { LoginController } from "../controllers/login-controller";
import { UserController } from "../controllers/user-controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const objectRouter = Router()

const userController = new UserController()
const loginUser = new LoginController()
const createCheckIn = new CheckInController()
const createCheckOut = new CheckOutController()

objectRouter.post('/user', userController.createUserName)
objectRouter.post('/login', loginUser.loginUser)
objectRouter.use(authMiddleware)
objectRouter.get('/auth', loginUser.getProfile)
objectRouter.post('/check-in', createCheckIn.createCheckIn)
objectRouter.post('/check-out', createCheckOut.createCheckOut)

export { objectRouter }