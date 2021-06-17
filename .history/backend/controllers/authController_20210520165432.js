const { promisify } = require('util');
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
  httpOnly: true,
 };

 if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

 res.cookies('jwt', token, cookieOptions);

 user.password = undefined;

 res.status(statusCode).json({
  status: 'success',
  token,
  data: {
   user,
  },
 });
};

exports.signup = catchAsync(async (req, res, next) => {
 const { name, email, password, confirmPassword, passwordChangedAt } = req.body;

 const details = {
  name,
  email,
  password,
  confirmPassword,
  passwordChangedAt,
 };

 const newUser = await User.create(details);

 createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
 const { email, password } = req.body;
 if (!email || !password)
  return next(new AppError('Please provide email and password', 400));

 const user = await User.findOne({ email }).select('+password');

 if (!user || !(await user.comparePassword(password, userPassword)))
  return next(new AppError('Wrong email or password', 400));

 createSendToken(user, 200, res);
});

exports.logout('jwt', {
 expires: new Date(Date.now()),
 httpOnly: true,
});

exports.protect = catchAsync(async (req, res, next) => {
 let token = '';

 if (
  req.headers.authorization &&
  req.headers.authorization.startsWith('Bearer')
 ) {
  token = req.headers.authorization.split(' ')[1];
 } else if (req.cookies.jwt) {
  token = req.cookies.jwt;
 }

 if (!token)
  return next(
   new AppError('You are not logged in! Please login to access this route', 401)
  );

 const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

 if (!decoded)
  return next(
   new AppError('This token does not belong to any user in this database', 404)
  );

 const checked = user.changedPasswordAfter(decoded.iat);

 if (!checked)
  return next(
   new AppError(
    'Password changed after token was issued. Please log in again!',
    401
   )
  );

 req.user = user;

 next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if ()
  }
};
