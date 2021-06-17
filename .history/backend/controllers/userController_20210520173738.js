const User = require('../models/User');

exports.getAllUsers = catchAsync(async (req, res, next) => {
 const users = await User.find();
});
