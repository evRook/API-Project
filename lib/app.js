import express from 'express'


//swagger
import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
import swaggerDocs from '../swagger.json' assert { type: "json" } 

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

//swagger route
app.use('/', swaggerUi.serve)
app.get('/', swaggerUi.setup(swaggerDocs))
console.log(swaggerDocs)

//routes
app.use('/allgames', allGamesRouter)
app.use('/atari', atariRouter)
app.use('/nintendo', nintendoRouter)
app.use('/ps1', ps1Router)
app.use('/ps2', ps2Router)
app.use('/ps4', ps4Router)
app.use('/xbox', xboxRouter)

//server
app.listen(3000, () => console.log('listening port 3000'))

