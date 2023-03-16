import express from 'express'
import xboxSchema from '../models/xbox.js'

const xboxRouter = express.Router()

xboxRouter.get('/', async (req, res) => {
    const xboxData = await xboxSchema.find({})
    if(xboxData === null){
        console.log("No Xbox Games Found")
    }else{
        res.json(xboxData)
    }
})

xboxRouter.get('/:name', async (req, res) => {
    const xboxName = await xboxSchema.find({ name: req.params.name})
    if(xboxName === null){
        console.log("No Xbox Games Found By that Name")
    }else{
        res.json(xboxName)
    }
})



export default xboxRouter