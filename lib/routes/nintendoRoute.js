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

export default nintendoRouter