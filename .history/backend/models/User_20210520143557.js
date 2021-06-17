const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
 name: {
  type: String,
  required: [true, 'A user must have a name'],
 },
 email: {
  type: String,
  required: [true, 'A user must have an email'],
 },
 address: {
  type: String,
 },
 city: String,
 dateCreated: {
  type: Date,
  default: Date.now,
 },
});
