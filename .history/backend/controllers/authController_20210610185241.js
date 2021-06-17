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
  expires: new Date(
   Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
  ),
  httpOnly: true,
 };

 if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

 res.cookie('jwt', token, cookieOptions);

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
 const { name, email, password, confirmPassword, passwordChangedAt, aboutYou } =
  req.body;

 const details = {
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  passwordChangedAt,
  aboutYou,
 };

 const newUser = await User.create(details);

 createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
 const { email, password } = req.body;
 if (!email || !password)
  return next(new AppError('Please provide email and password', 400));

 const user = await User.findOne({ email }).select('+password');
 console.log(user.password);

 if (!user || !(await user.comparePasswords(password, user.password)))
  return next(new AppError('Wrong email or password', 400));

 createSendToken(user, 200, res);
});

exports.logout = (req, res) => {
 res.cookie('jwt', 'loggedout', {
  expires: new Date(Date.now()),
  httpOnly: true,
 });

 res.status(200).json({
  status: 'success',
  message: 'You have successfully logged out',
 });
};

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

 console.log('Result:', decoded);

 const user = await User.findById(decoded.id);
 const checked = user.changedPasswordAfter(decoded.iat);

 //  const checked = user.changedPasswordAfter(decoded.iat);

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
  if (!roles.includes(req.user.role))
   return next(
    new AppError('You are restricted from accessing this route', 403)
   );

  next();
 };
};

exports.updatePassword = catchAsync(async (req, res, next) => {
 const { currentPassword, newPassword, confirmNewPassword } = req.body;

 const user = await User.findById(req.user._id).select('+password');

 if (!currentPassword || newPassword || confirmNewPassword) return next();

 if (!(await user.comparePassword(currentPassword, user.password)))
  return next(new AppError('Password incorrect!', 401));

 user.password = newPassword;
 user.confirmPassword = confirmNewPassword;
 await user.save();

 const token = signToken(user._id);

 res.status(200).json({
  status: 'success',
  token,
  message: 'Password updated successfully',
 });
});
