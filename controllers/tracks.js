const Track = require("../models/track")
const express = require("express")
const router = express.Router()

// Create new track function
router.post("/", async (req, res) => {
  try {
    const createTrack = await Track.create(req.body)
    res.status(201).json(createTrack)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get all tracks function
router.get("/", async (req, res) => {
  try {
    const foundTracks = await Track.find({})
    res.status(200).json(foundTracks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get one track by ID function
router.get("/:trackId", async (req, res) => {
  try {
    const foundTrack = await Track.findById(req.params.trackId)
    if (!foundTrack) {
      return res.sendStatus(404) // Use sendStatus here
    }
    return res.status(200).json(foundTrack) // Send found track
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update one track by ID function
router.put("/:trackId", async (req, res) => {
  try {
    const updateTrack = await Track.findByIdAndUpdate(
      req.params.trackId,
      req.body,
      {
        new: true,
      }
    )
    if (!updateTrack) {
      return res.sendStatus(404) // Use sendStatus for not found
    }
    return res.status(200).json(updateTrack) // Send updated track
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete one track by ID function
router.delete("/:trackId", async (req, res) => {
  try {
    const deleteTrack = await Track.findByIdAndDelete(req.params.trackId) // Fix this line

    if (!deleteTrack) {
      return res.sendStatus(404) // Use sendStatus for not found
    }
    return res.sendStatus(204) // Respond with no content on successful delete
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
