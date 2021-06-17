const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = mongoose.Schema({
 name: {
  type: String,
  required: [true, 'A user must have a name'],
 },
 email: {
  type: String,
  required: [true, 'A user must have an email'],
 },
 password: {
  type: String,
  required: [true, 'Password is needed for authentication'],
 },
 confirmPassword: {
  type: String,
  required: [true, 'Confirm password please!'],
  validate: validator(function () {
   this.pass;
  }),
 },
 address: {
  address: { type: String },
  city: { type: String },
  country: { type: String },
 },
 dateCreated: {
  type: Date,
  default: Date.now,
 },
});
