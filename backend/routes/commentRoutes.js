const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");

/// add comment
router.post("/add", async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.json({ msg: "Comment added" });
    } catch (err) {
        res.json(err);
    }
});

/// get comments by video
router.get("/:videoId", async (req, res) => {
    try {
        const comments = await Comment.find({ videoId: req.params.videoId });
        res.json(comments);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
