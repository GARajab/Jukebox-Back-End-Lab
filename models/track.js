const mongoose = require("mongoose")

const tracksSchema = mongoose.Schema({
  title: { type: String, require: true },
  artist: { type: String, require: true },
})

const Track = mongoose.model("Track", tracksSchema)

module.exports = Track
