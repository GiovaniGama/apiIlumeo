import 'express-async-errors'
import express from 'express'
import { errorMiddleware } from './app/middlewares/error'
import { objectRouter } from './app/routes/routes'
import cors from 'cors'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.use(cors())
app.use(express.json())
app.use(objectRouter)
app.use(errorMiddleware)

app.listen(PORT, HOST)

