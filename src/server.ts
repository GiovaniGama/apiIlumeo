import 'express-async-errors'
import { ApiError, BadRequestError, NotFoundError } from './app/helpers/api-errors';
import express, { Request, Response } from 'express'
import { errorMiddleware } from './app/middlewares/error'

import { objectRouter } from './app/routes/routes'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.use(express.json())
app.use(objectRouter)

app.use(errorMiddleware)

app.listen(PORT, HOST)