import express from 'express'
import ps4Schema from '../models/ps4.js'

const ps4Router = express.Router()

ps4Router.get('/', async (req, res) => {
    const ps4Data = await ps4Schema.find({})
    if(ps4Data === null){
        console.log("No PS4 Games Found")
    }else{
        res.json(ps4Data)
    }
})

ps4Router.get('/name/:name', async (req, res) => {
    const ps4Name = await ps4Schema.find({ name: req.params.name})
    if(ps4Name === null){
        console.log("No PS4 Games Found By that Name")
    }else{
        res.json(ps4Name)
    }
})


ps4Router.get('/id/:id', async (req, res) => {
    const ps4Id = await ps4Schema.findById(req.params.id)
    if(ps4Id === null){
        console.log("No PS4 Games Found By that Id")
    }else{
        res.json(ps4Id)
    }
})

ps4Router.post('/', async (req, res) => {
    const ps4Post = await ps4Schema.create(req.body)
    if(ps4Post === null){
        console.log("No PS4 Games Post")
    }else{
        res.json(ps4Post)
    }
})

ps4Router.put('/:id', async (req, res) => {
    const ps4Update = await ps4Schema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    )
    res.json(ps4Update)
})

ps4Router.delete('/:id', async (req, res) => {
    const ps4Del = await ps4Schema.findOneAndRemove({ _id: req.params.id })
    res.json(ps4Del)
})

export default ps4Router