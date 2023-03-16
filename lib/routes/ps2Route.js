import express from 'express'
import ps2Schema from '../models/ps2.js'

const ps2Router = express.Router()

ps2Router.get('/', async (req, res) => {
    const ps2Data = await ps2Schema.find({})
    if(ps2Data === null){
        console.log("No PS2 Games Found")
    }else{
        res.json(ps2Data)
    }
})

ps2Router.get('/name/:name', async (req, res) => {
    const ps2Name = await ps2Schema.find({ name: req.params.name})
    if(ps2Name === null){
        console.log("No PS2 Games Found By that Name")
    }else{
        res.json(ps2Name)
    }
})


ps2Router.get('/id/:id', async (req, res) => {
    const ps2Id = await ps2Schema.findById(req.params.id)
    if(ps2Id === null){
        console.log("No PS2 Games Found By that Id")
    }else{
        res.json(ps2Id)
    }
})

ps2Router.post('/', async (req, res) => {
    const ps2Post = await ps2Schema.create(req.body)
    if(ps2Post === null){
        console.log("No PS2 Games Post")
    }else{
        res.json(ps2Post)
    }
})

ps2Router.put('/:id', async (req, res) => {
    const ps2Update = await ps2Schema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    )
    res.json(ps2Update)
})

ps2Router.delete('/:id', async (req, res) => {
    const ps2Del = await ps2Schema.findOneAndRemove({ _id: req.params.id })
    res.json(ps2Del)
})

export default ps2Router