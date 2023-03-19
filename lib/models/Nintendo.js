import mongoose from '../db/connection.js'

const Schema = mongoose.Schema

const nintendoSchema = new Schema({
    "meta-score": Number,
    name: String,
    platform: String,
    releaseDate: String,
    "user_score": String,
    link: String,
    "esrb_rating": String,
    developers: String,
    genres: String,
})

export default mongoose.model("Nintendo", nintendoSchema)