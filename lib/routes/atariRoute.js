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

atariRouter.get('/name/:name', async (req, res) => {
    const atariName = await atariSchema.find({ name: req.params.name})
    if(atariName === null){
        console.log("No Atari Games Found By that Name")
    }else{
        res.json(atariName)
    }
})


atariRouter.get('/id/:id', async (req, res) => {
    const atariId = await atariSchema.findById(req.params.id)
    if(atariId === null){
        console.log("No Atari Games Found By that Id")
    }else{
        res.json(atariId)
    }
})

atariRouter.post('/', async (req, res) => {
    const atariPost = await atariSchema.create(req.body)
    if(atariPost === null){
        console.log("No Atari Games Post")
    }else{
        res.json(atariPost)
    }
})

atariRouter.put('/:id', async (req, res) => {
    const atariUpdate = await atariSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    )
    res.json(atariUpdate)
})

atariRouter.delete('/:id', async (req, res) => {
    const atariDel = await atariSchema.findOneAndRemove({ _id: req.params.id })
    res.json(atariDel)
})

export default atariRouter