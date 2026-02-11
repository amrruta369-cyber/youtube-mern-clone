const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

/// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/youtubeclone")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

/// test route
app.get("/", (req, res) => {
    res.send("YouTube Clone API running");
});

///  AUTH ROUTES
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

///  VIDEO ROUTES
const videoRoutes = require("./routes/videoRoutes");
app.use("/api/videos", videoRoutes);

///  COMMENT ROUTES
const commentRoutes = require("./routes/commentRoutes");
app.use("/api/comments", commentRoutes);

/// server start
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
