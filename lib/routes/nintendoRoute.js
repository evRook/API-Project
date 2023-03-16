import express from 'express'
import nintendoSchema from '../models/nintendo.js'

const nintendoRouter = express.Router()

nintendoRouter.get('/', async (req, res) => {
    const nintendoData = await nintendoSchema.find({})
    if(nintendoData === null){
        console.log("No Nintendo Games Found")
    }else{
        res.json(nintendoData)
    }
})

nintendoRouter.get('/name/:name', async (req, res) => {
    const nintendoName = await nintendoSchema.find({ name: req.params.name})
    if(nintendoName === null){
        console.log("No Nintendo Games Found By that Name")
    }else{
        res.json(nintendoName)
    }
})


nintendoRouter.get('/id/:id', async (req, res) => {
    const nintendoId = await nintendoSchema.findById(req.params.id)
    if(nintendoId === null){
        console.log("No Nintendo Games Found By that Id")
    }else{
        res.json(nintendoId)
    }
})

nintendoRouter.post('/', async (req, res) => {
    const nintendoPost = await nintendoSchema.create(req.body)
    if(nintendoPost === null){
        console.log("No Nintendo Games Post")
    }else{
        res.json(nintendoPost)
    }
})

nintendoRouter.put('/:id', async (req, res) => {
    const nintendoUpdate = await nintendoSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    )
    res.json(nintendoUpdate)
})

nintendoRouter.delete('/:id', async (req, res) => {
    const nintendoDel = await nintendoSchema.findOneAndRemove({ _id: req.params.id })
    res.json(nintendoDel)
})

export default nintendoRouter