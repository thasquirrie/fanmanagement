const bcrypt = require('bcryptjs');
const User = require('../models/User');

export const signup = catchAsync(async (req, res, next) => {
  const {name, email, password, confirmPassword}
})