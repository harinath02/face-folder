// mongooseConnection.js
const mongoose = require('mongoose');
const config = require('./config/config.js')


async function connectToDatabase() {
    try {
        // MongoDB URI
        const uri = `mongodb+srv://albert20:${config.mongodb_pass}@cluster0.jjw3a0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

        // Connect to MongoDB using Mongoose
        await mongoose.connect(uri, {
            useNewUrlParser: true,
         
        });

        console.log('Connected to MongoDB (Mongoose)');
    } catch (error) {
        console.error('Error connecting to MongoDB (Mongoose):', error);
    }
}

module.exports = connectToDatabase;
