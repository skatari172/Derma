const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const cors = require('cors');
app.use(cors()); // Allow all cross-origin requests (simple solution for development)

// Initialize Express
const app = express();
app.use(express.json());  // Middleware to parse JSON requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// User Schema and Model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

// Register a new user
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ msg: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user and save to database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Login a user
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid username or password' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid username or password' });
    }

    res.status(200).json({ msg: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
