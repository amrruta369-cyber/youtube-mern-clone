const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

/// REGISTER
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const hashed = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashed
        });

        await user.save();
        res.json({ msg: "User registered" });
    } catch (err) {
        res.json(err);
    }
});

/// LOGIN
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.json({ msg: "User not found" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.json({ msg: "Wrong password" });

        const token = jwt.sign(
            { id: user._id },
            "secret123",
            { expiresIn: "1d" }
        );

        res.json({ token });
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;
