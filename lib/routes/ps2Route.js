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

export default ps2Router