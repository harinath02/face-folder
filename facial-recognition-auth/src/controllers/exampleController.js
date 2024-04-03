// Import any required services or models here
const exampleService = require('../services/exampleService');
const UserModel= require('../models');

// Define your controller methods
exports.getExamples = async (req, res) => {
  try {
    res.status(200).json({ Message: 'Success' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createExample =async (req, res) => {
  try {
      const { username, email, password } = req.body;

      // Create a new user instance
      const newUser = new UserModel({ username, email, password });

      // Save the user to the database
      await newUser.save();

      res.status(201).json(newUser);
  } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
  }
};



