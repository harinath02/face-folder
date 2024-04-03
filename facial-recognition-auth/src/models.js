// userModel.js


const mongoose = require('mongoose');

// Define Schema
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});

// Create Model
const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;