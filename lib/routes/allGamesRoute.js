import express from 'express'
import AllGames from '../models/AllGames.js'

const allGamesRouter = express.Router()

allGamesRouter.get('/', async (req, res) => {
    const allGamesData = await AllGames.find({})
    if(allGamesData === null){
        console.log("No Games Found")
    }else{
        res.json(allGamesData)
    }
})

export default allGamesRouter