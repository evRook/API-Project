import mongoose from '../db/connection.js'

const Schema = mongoose.Schema

const ps1Schema = new Schema({
    name: String,
    platform: String,
    releaseDate: String,
    developers: String,
    genres: String,
    link: String,
})

export default mongoose.model("PS1", ps1Schema)