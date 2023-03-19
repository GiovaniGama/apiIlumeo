import express from 'express'

import { objectRouter } from './app/routes/routes'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.use(express.json())
app.use(objectRouter)

app.listen(PORT, HOST)