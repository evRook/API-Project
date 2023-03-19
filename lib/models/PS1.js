import mongoose from '../db/connection.js'

const Schema = mongoose.Schema

const ps1Schema = new Schema({
    name: String,
    platform: String,
    developers: String,
    "publisher(s)": String,
    releaseDate: String,
    "regions released__1": String,
    "regions released__2": String,
})

export default mongoose.model("PS1", ps1Schema)