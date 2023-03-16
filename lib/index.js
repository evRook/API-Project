import express from 'express'
import allGamesRouter from './routes/allGamesRoute.js'

const app = express()

app.use(express.json())

app.use('/allgames', allGamesRouter)

app.listen(3000, () => console.log('listening port 3000'))

