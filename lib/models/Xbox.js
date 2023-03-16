import mongoose from '../db/connection.js'

const Schema = mongoose.Schema

const xboxSchema = new Schema({
    name: String,
    platform: String,
    releaseDate: String,
    developers: String,
    genres: String,
    link: String,
})

export default mongoose.model("Xbox", xbobxSchema)