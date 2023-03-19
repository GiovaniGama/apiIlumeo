import express from 'express'

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
    return res.send('stests sdadasteste teste')
})

app.listen(PORT, HOST)