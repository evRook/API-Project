import mongoose from '../db/connection.js'

const Schema = mongoose.Schema

const ps2Schema = new Schema({
    name: String,
    platform: String,
    developers: String,
    publishers: String,
    link: String,
    releaseDate: String,
    JP: String,
    "EU/PAL": String,
    NA: String
})

export default mongoose.model("PS2", ps2Schema)