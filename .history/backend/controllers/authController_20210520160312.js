const jwt = require('jsonwebtoken');
const User = require('../models/User');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const signToken = jwt();

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
