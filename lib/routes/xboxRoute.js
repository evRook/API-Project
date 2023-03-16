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

xboxRouter.get('/id/:id', async (req, res) => {
    const xboxId = await xboxSchema.findById(req.params.id)
    if(xboxId === null){
        console.log("No Xbox Games Found By that Id")
    }else{
        res.json(xboxId)
    }
})

xboxRouter.post('/', async (req, res) => {
    const xboxPost = await xboxSchema.create(req.body)
    if(xboxPost === null){
        console.log("No Xbox Post")
    }else{
        res.json(xboxPost)
    }
})

xboxRouter.put('/:id', async (req, res) => {
    const xboxUpdate = await xboxSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    )
    res.json(xboxUpdate)
})


export default xboxRouter