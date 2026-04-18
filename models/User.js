const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  companyName: String,
  logo: String,
  organizationType: String,
  industryType: String,
  teamSize: String,
  yearOfEstablishment: Number,
  aboutUs: String,
  location: String,
  contactNumber: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);