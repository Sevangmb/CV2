// src/dbConfig.js


import mongoose from 'mongoose';
// Define the MongoDB connection string
const dbURI = 'mongodb://localhost:27017/cvDatabase';

// Function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    process.exit(1); // Exit process with failure
  }
};

// Handle connection events
mongoose.connection.on('connected', () => {});

mongoose.connection.on('error', (err) => {});

mongoose.connection.on('disconnected', () => {});

// Export the connection function
export default connectDB;
