// src/models/ResumeModel.js

import mongoose from 'mongoose';

// Define the schema for resume data
const resumeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cast: {
    type: [String],
    required: true,
  },
  runtime: {
    type: Number,
    required: true,
  },
});

// Create the model from the schema
const ResumeModel = mongoose.model('Resume', resumeSchema);

// Export the model
export default ResumeModel;
