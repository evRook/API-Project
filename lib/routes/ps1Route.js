import express from 'express'
import ps1Schema from '../models/ps1.js'

const ps1Router = express.Router()

ps1Router.get('/', async (req, res) => {
    const ps1Data = await ps1Schema.find({})
    if(ps1Data === null){
        console.log("No PS1 Games Found")
    }else{
        res.json(ps1Data)
    }
})

ps1Router.get('/name/:name', async (req, res) => {
    const ps1Name = await ps1Schema.find({ name: req.params.name})
    if(ps1Name === null){
        console.log("No PS1 Games Found By that Name")
    }else{
        res.json(ps1Name)
    }
})


ps1Router.get('/id/:id', async (req, res) => {
    const ps1Id = await ps1Schema.findById(req.params.id)
    if(ps1Id === null){
        console.log("No PS1 Games Found By that Id")
    }else{
        res.json(ps1Id)
    }
})

ps1Router.post('/', async (req, res) => {
    const ps1Post = await ps1Schema.create(req.body)
    if(ps1Post === null){
        console.log("No PS1 Games Post")
    }else{
        res.json(ps1Post)
    }
})

ps1Router.put('/:id', async (req, res) => {
    const ps1Update = await ps1Schema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    )
    res.json(ps1Update)
})

ps1Router.delete('/:id', async (req, res) => {
    const ps1Del = await ps1Schema.findOneAndRemove({ _id: req.params.id })
    res.json(ps1Del)
})

export default ps1Router