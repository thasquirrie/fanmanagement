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
 req.params.id = req.user.id;

 next();
});

exports.updateUser = catchAsync(async (req, res, next) => {
 const user = await User.findById(req.params.id);

 if (!user)
  return next(new AppError('User with this id not found on this server', 404));

 const updatedUser = await User.findByIdAndUpdate(user._id, req.body, {
  new: true,
  runValidators: true,
 });

 res.status(200).json({
  status: 'success',
  data: {
   user: updatedUser,
  },
 });
});

const filterObj = (obj, ...allowedFields) => {
 const newObj = {};

 Object.keys(obj).forEach((el) => {
  if (allowedFields.includes(el)) {
   newObj[el] = obj[el];
  }
 });

 return newObj;
};

exports.updateMe = catchAsync(async (req, res, next) => {
 const allowedFields = [
  'firstName',
  'lastName',
  'username',
  'email',
  'photo',
  'country',
  'phone',
 ];
 const filteredFields = filterObj(req.body, allowedFields);

 const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredFields, {
  new: true,
  runValidators: true,
 });

 res.status(200).json({
  status: 'success',
  data: {
   user: updatedUser,
  },
 });
});

exports.deleteUser = catchAsync(async (req, res, next) => {
 const user = await User.findByIdAndDelete(req.params.id);

 if (!user) return next(new AppError('User not found in the database!', 404));

 res.status(204).json({
  status: 'success',
 });
});