import express from 'express'
import atariSchema from '../models/Atari.js'

const atariRouter = express.Router()

atariRouter.get('/', async (req, res) => {
    const atariData = await atariSchema.find({})
    if(atariData === null){
        console.log("No Games Found")
    }else{
        res.json(atariData)
    }
})

export default atariRouter