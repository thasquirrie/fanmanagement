const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const signToken = (id) => {
 return jwt.sign({ id }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_EXPIRES_IN,
 });
};

const createSendToken = (user, statusCode, res) => {
 const token = signToken(user._id);
 const cookieOptions = {
  expires: newDate(
   Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
  ),
  httpOnly: true
 };

 if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

 res.status(statusCode).json{
   status: 'success',
   
 }
};

export const signup = catchAsync(async (req, res, next) => {
 const { name, email, password, confirmPassword, passwordChangedAt } = req.body;

 const details = {
  name,
  email,
  password,
  confirmPassword,
  passwordChangedAt,
 };

 const newUser = await User.create(details);
});
