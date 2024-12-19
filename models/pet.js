const mongoose = require("mongoose")

const jukeBoxSchema = mongoose.Schema({
  title: { type: String, require: true },
  artist: { type: String, require: true },
})

const jukeBox = mongoose.model("jukeBox", jukeBoxSchema)

module.exports = jukeBox
