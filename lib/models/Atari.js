import mongoose from '../db/connection.js'

const Schema = mongoose.Schema

const atariSchema = new Schema({
    name: String,
    platform: String,
    releaseDate: String,
    developers: String,
    publisher: String,
    genres: String,
    notes: String,
})

export default mongoose.model("Atari", atariSchema)