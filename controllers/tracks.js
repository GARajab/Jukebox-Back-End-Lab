const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const createTracks = await create(req.body)
    res.status(201).jsin(createTracks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
router.get("/", async (req, res) => {
  try {
    const foundTracks = await find({})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
router.get("/:trackId", async (req, res) => {
  try {
    const foundTrack = await findById(req.params.trackId)
    if (!foundTrack) {
      res.send(404).json({ error: "Track Not Available" })
    }
    res.send(200).json(foundTrack)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
router.get
router.get
