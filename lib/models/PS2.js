import mongoose from '../db/connection.js'

const Schema = mongoose.Schema

const ps2Schema = new Schema({
    name: String,
    platform: String,
    releaseDate: String,
    developers: String,
    genres: String,
    link: String,
})

export default mongoose.model("PS2", ps2Schema)