import mongoose from './connection.js'

// models
import AllGames from '../models/AllGames.js'
import Atari from '../models/Atari.js'
import Nintendo from '../models/Nintendo.js'
import PS1 from '../models/PS1.js'
import PS2 from '../models/PS2.js'
import PS4 from '../models/PS4.js'
import Xbox from '../models/Xbox.js'


// json data
// const { default: atariData } = await import('./Atari.json', {assert: { type: "json" }}) 
import atariData from './Atari.json' assert { type: "json" } 
import nintendoData from './Nintendo.json' assert { type: "json" }
import ps1Data from './PS1.json' assert { type: "json" }
import ps2Data from './PS2.json' assert { type: "json" }
import ps4Data from './PS4.json' assert { type: "json" }
import xboxData from './Xbox.json' assert { type: "json" }


// seeds
AllGames.collection.deleteMany({})
AllGames.collection.insertMany(atariData)
AllGames.collection.insertMany(nintendoData)
AllGames.collection.insertMany(ps1Data)
AllGames.collection.insertMany(ps2Data)
AllGames.collection.insertMany(ps4Data)
AllGames.collection.insertMany(xboxData)
    .then(() => console.log("all done"))
    .catch((err) => console.log("err", err))


Atari.collection.deleteMany({})
Atari.collection.insertMany(atariData)
    .then(() => console.log("atari done"))
    .catch((err) => console.log("err", err))

Nintendo.collection.deleteMany({})
Nintendo.collection.insertMany(nintendoData)
    .then(() => console.log("nintendo done"))
    .catch((err) => console.log("err", err))

PS1.collection.deleteMany({})
PS1.collection.insertMany(ps1Data)
    .then(() => console.log("PS1 done"))
    .catch((err) => console.log("err", err))

PS2.collection.deleteMany({})
PS2.collection.insertMany(ps2Data)
    .then(() => console.log("PS2 done"))
    .catch((err) => console.log("err", err))

PS4.collection.deleteMany({})
PS4.collection.insertMany(ps4Data)
    .then(() => console.log("PS4 done"))
    .catch((err) => console.log("err", err))

Xbox.collection.deleteMany({})
Xbox.collection.insertMany(xboxData)
    .then(() => console.log("Xbox done"))
    .catch((err) => console.log("err", err))