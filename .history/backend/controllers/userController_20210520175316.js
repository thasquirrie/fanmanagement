const User = require('../models/User');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
 const users = await User.find();

 res.status(200).json({
  status: 'success',
  length: users.length,
  data: {
   users,
  },
 });
});

exports.getUser = catchAsync(async (req, res, next) => {
 const user = await User.findById(req.params.id);

 if (!user)
  return next(
   new AppError('No user with that id found in this database!', 404)
  );

 res.status(200).json({
  status: 'success',
  data: {
   user,
  },
 });
});

exports.getMe = catchAsync(async (req, res, next) => {
 const user = await User.findById(req.params.id);
});
