import mongoose from './connection.js'

// models
import AllGames from '../models/AllGames.js'
import Atari from '../models/Atari.js'


// json data
// const { default: atariData } = await import('./Atari.json', {assert: { type: "json" }}) 
import atariData from './Atari.json' assert { type: "json" } 
import nintendoData from './Nintendo.json' assert { type: "json" }
import ps1Data from './PS1.json' assert { type: "json" }
import ps2Data from './PS2.json' assert { type: "json" }
import ps4Data from './PS4.json' assert { type: "json" }
import xboxData from './Xbox.json' assert { type: "json" }

// seeds
AllGames.deleteMany({})
AllGames.collection.insertMany(atariData)
AllGames.collection.insertMany(nintendoData)
AllGames.collection.insertMany(ps1Data)
AllGames.collection.insertMany(ps2Data)
AllGames.collection.insertMany(ps4Data)
AllGames.collection.insertMany(xboxData)
    .then(() => console.log("all done"))
    .catch((err) => console.log("err", err))

Atari.deleteMany({})
Atari.collection.insertMany(atariData)
    .then(() => console.log("atari done"))
    .catch((err) => console.log("err", err))
