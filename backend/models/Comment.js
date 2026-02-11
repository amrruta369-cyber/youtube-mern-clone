const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    videoId: String,
    userId: String,
    text: String
});

module.exports = mongoose.model("Comment", commentSchema);
