const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  // 1. Get token from header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // 2. If no token
  if (!token) {
    throw new AppError('Not authorized, no token', 401);
  }

  // 3. Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // 4. Get user from DB
  const user = await User.findById(decoded.id);

  if (!user) {
    throw new AppError('User not found', 401);
  }

  // 5. Attach user to request
  req.user = user;

  next();
});

exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('Forbidden: Access denied', 403));
    }
    next();
  };
};