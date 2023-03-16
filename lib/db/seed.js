import mongoose from './connection.js'

// models
import AllGames from '../models/AllGames.js'

// json data
// const { default: atariData } = await import('./Atari.json', {assert: { type: "json" }}) 
import atariData from './Atari.json' assert { type: "json" } 
// import nintendoData from './Nintendo.json' assert { type: "json" }
// import ps1Data from './PS1.json' assert { type: "json" }
// import ps2Data from './PS2.json' assert { type: "json" }
// import ps4Data from './PS4.json' assert { type: "json" }
// import steamData from './Steam.json' assert { type: "json" }
// import xboxData from './Xbox.json' assert { type: "json" }

// seeds
AllGames.deleteMany({})
AllGames.collection.insertMany(atariData)
// AllGames.collection.insertMany(nintendoData)
    .then(() => console.log("done"))
    .catch((err) => console.log("err", err))

// AllGames.deleteMany({})
// AllGames.collection.insert(atariData)
//   .then(atariData => {
//     console.log(atariData)
//   })
//   .catch(err => {
//     console.log(err)
//   })