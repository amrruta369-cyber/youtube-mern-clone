const express = require("express");
const router = express.Router();
const Video = require("../models/Video");

/// add video
router.post("/add", async (req, res) => {
    try {
        const video = new Video(req.body);
        await video.save();
        res.json({ msg: "Video added" });
    } catch (err) {
        res.json(err);
    }
});

/// get all videos
router.get("/all", async (req, res) => {
    try {
        const videos = await Video.find();
        res.json(videos);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
