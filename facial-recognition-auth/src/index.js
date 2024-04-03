const express = require('express');
const cors = require('cors');
const config = require('./config/config.js');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const User = require('./models/User');
const initFaceDetectionModels = require('./models/models');
const getFaceDescriptorFromWebcam = require('./utils/webcam'); 


const app = express();
const connectToDatabase = require('./data');

connectToDatabase();
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

initFaceDetectionModels();

// Registration route (POST)
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Validate username and password (implement validation logic)

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Extract facial descriptor from webcam stream
    const faceDescriptor = await getFaceDescriptorFromWebcam();
    if (!faceDescriptor) {
      return res.status(400).json({ message: 'Failed to capture face' });
    }

    const newUser = new User({
      username,
      password,
      faceDescriptor,
    });

    await newUser.save();
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Login route (POST) - Assuming facial recognition for login
app.post('/login', async (req, res) => {
  const { username } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username' });
    }

    // Extract facial descriptor from webcam stream (same logic as registration)
    const capturedFaceDescriptor = await getFaceDescriptorFromWebcam();
    if (!capturedFaceDescriptor) {
      return res.status(400).json({ message: 'Failed to capture face' });
    }

    // Compare captured descriptor with stored descriptor for the user
    const distance = faceapi.euclideanDistance(
      new faceapi.SsdMobilenetv1FullFaceDescription(capturedFaceDescriptor),
      new faceapi.SsdMobilenetv1FullFaceDescription(user.faceDescriptor)
    );
    const threshold = 0.6; // Adjust threshold based on desired accuracy vs. security

    if (distance <= threshold) {
      // Login successful
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid face' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));