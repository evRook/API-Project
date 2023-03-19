import mongoose from '../db/connection.js'

const Schema = mongoose.Schema

const xboxSchema = new Schema({
    gameid: Number,
    name: String,
    link: String,
    publisher: String,
    developers: String,
    releaseDate: String,
    platform: String,
    genres: String,
    harware: String,
    notes: String,
    medium: String,
    size: String,
    "completion est": String,
    links: String,
    features: String
})

export default mongoose.model("Xbox", xboxSchema)