import mongoose from '../db/connection.js'

const Schema = mongoose.Schema

const ps4Schema = new Schema({
    gamePSID: Number,
    name: String,
    publisher: String,
    releaseDate: String,
    releaseYear: String,
    developers: String,
    platform: String,
    genres: String,
    feature: String,
    size: Number,
    medium: String,
    hardware: String,
    "completionTime(hours)": String,
    "is_Digital_game": Number,
    "is_Physical_game": Number,
    link: String
})

export default mongoose.model("PS4", ps4Schema)