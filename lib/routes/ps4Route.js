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

export default ps4Router