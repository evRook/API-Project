import express from 'express'

//swagger
import swaggerJsDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

//routers
import allGamesRouter from './routes/allGamesRoute.js'
import atariRouter from './routes/atariRoute.js'
import nintendoRouter from './routes/nintendoRoute.js'
import ps1Router from './routes/ps1Route.js'
import ps2Router from './routes/ps2Route.js'
import ps4Router from './routes/ps4Route.js'
import xboxRouter from './routes/xboxRoute.js'

//swagger server
const swagger = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Video Games API",
            version: "1.0.0",
            description: "A list of video games",
            contact: {
                name: "Contribute",
                url: "https://github.com/evRook/API-Project"
            },
        },
        servers: [
            {
                url: "http://localhost:3000"
            },
        ], 
    },
    apis: ["./routes/*.js"]
}

const swagDocs = swaggerJsDoc(swagger) 


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

//swagger route
app.use('/apiDocs', swaggerUi.serve, swaggerUi.setup(swagDocs))

//server
app.listen(3000, () => console.log('listening port 3000'))

