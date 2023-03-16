import express from 'express'

//routers
import allGamesRouter from './routes/allGamesRoute.js'
import atariRouter from './routes/atariRoute.js'
import nintendoRouter from './routes/nintendoRoute.js'
import ps1Router from './routes/ps1Route.js'
import ps2Router from './routes/ps2Route.js'
import ps4Router from './routes/ps4Route.js'
import xboxRouter from './routes/xboxRoute.js'

const app = express()

//parser
app.use(express.json())

//routes
app.use('/allgames', allGamesRouter)
app.use('/atari', atariRouter)
app.use('/nintendo', nintendoRouter)
app.use('/ps1', ps1Router)
app.use('/ps2', ps2Router)
app.use('/ps4', ps4Router)
app.use('/xbox', xboxRouter)

app.listen(3000, () => console.log('listening port 3000'))

