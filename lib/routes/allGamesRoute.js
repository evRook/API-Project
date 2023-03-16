import express from 'express'
import allGamesSchema from '../models/AllGames.js'

const allGamesRouter = express.Router()

allGamesRouter.get('/', async (req, res) => {
    const allGamesData = await allGamesSchema.find({})
    if(allGamesData === null){
        console.log("No Games Found")
    }else{
        res.json(allGamesData)
    }
})

allGamesRouter.get('/name/:name', async (req, res) => {
    const allGamesName = await allGamesSchema.find({ name: req.params.name})
    if(allGamesName === null){
        console.log("No Games Found By that Name")
    }else{
        res.json(allGamesName)
    }
})

allGamesRouter.get('/platform/:platform', async (req, res) => {
    const allGamesName = await allGamesSchema.find({ platform: req.params.platform})
    if(allGamesName === null){
        console.log("No Games Found By that Name")
    }else{
        res.json(allGamesName)
    }
})

allGamesRouter.get('/id/:id', async (req, res) => {
    const allGamesId = await allGamesSchema.findById(req.params.id)
    if(allGamesId === null){
        console.log("No Games Found By that Id")
    }else{
        res.json(allGamesId)
    }
})

allGamesRouter.post('/', async (req, res) => {
    const allGamesPost = await allGamesSchema.create(req.body)
    if(allGamesPost === null){
        console.log("No Games Post")
    }else{
        res.json(allGamesPost)
    }
})

allGamesRouter.put('/:id', async (req, res) => {
    const allGamesUpdate = await allGamesSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    )
    res.json(allGamesUpdate)
})

allGamesRouter.delete('/:id', async (req, res) => {
    const allGamesDel = await allGamesSchema.findOneAndRemove({ _id: req.params.id })
    res.json(allGamesDel)
})

export default allGamesRouter