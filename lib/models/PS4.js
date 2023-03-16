import mongoose from '../db/connection.js'

const Schema = mongoose.Schema

const ps4Schema = new Schema({
    name: String,
    platform: String,
    releaseDate: String,
    developers: String,
    genres: String,
    link: String,
})

export default mongoose.model("PS4", ps4Schema)