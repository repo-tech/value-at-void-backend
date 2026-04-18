const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  employer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  jobTitle: String,
  tags: [String],
  jobRole: String,
  minSalary: Number,
  maxSalary: Number,
  salaryType: String,
  educationLevel: String,
  experienceLevel: String,
  jobType: String,
  jobLevel: String,
  expirationDate: Date,
  country: String,
  city: String,
  isRemote: Boolean,
  description: String,
  requirements: [String],
  status: { type: String, enum: ['Active', 'Expired'], default: 'Active' },
  applications: { type: Number, default: 0 },
  postedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);