const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// Connecting to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("✅ DB connected successfully..."))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// API Landing Page
app.get('/', (req, res) => {
    res.send("<h1 align='center'>Welcome to the backend and week 2</h1>");
});

// 📝 REGISTER Route
app.post('/register', async (req, res) => {
    try {
        console.log("🔹 Raw Request Body:", req.body);

        if (!req.body) {
            return res.status(400).json({ error: "Request body is empty or invalid JSON" });
        }

        const { user, email, password } = req.body;
        if (!user || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
    } catch (err) {
        console.error("❌ JSON Parsing Error:", err);
        res.status(400).json({ error: "Invalid JSON format" });
    }
});


// 🔐 LOGIN Route
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign(
            { userId: existingUser._id, email: existingUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).json({ error: "Internal server error", details: err.message });
    }
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
