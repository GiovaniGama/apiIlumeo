import express from 'express'

import { objectRouter } from './app/routes/routes'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
    res.send('foi caralho')
})

app.use(express.json())
app.use(objectRouter)

app.listen(PORT, HOST)