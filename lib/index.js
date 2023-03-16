import express from 'express'
import allGamesRouter from './routes/allGamesRoute.js'
import atariRouter from './routes/atariRoute.js'

const app = express()

app.use(express.json())

app.use('/allgames', allGamesRouter)
app.use('/atari', atariRouter)

app.listen(3000, () => console.log('listening port 3000'))

