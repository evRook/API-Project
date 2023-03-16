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

export default ps1Router