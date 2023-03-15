import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/Video-Game-Library', { useNewUrlParser: true, useUnifiedTopology: true })

export default mongoose