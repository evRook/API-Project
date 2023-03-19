import mongoose from '../db/connection.js'

const Schema = mongoose.Schema

const atariSchema = new Schema({
    name: String,
    platform: String,
    developers: String,
    publisher: String,
    releaseDate: String,
    genres: String,
    notes: String,
})

export default mongoose.model("Atari", atariSchema)