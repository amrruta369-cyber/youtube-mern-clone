const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    videoUrl: String,
    thumbnail: String,
    userId: String
});

module.exports = mongoose.model("Video", videoSchema);
