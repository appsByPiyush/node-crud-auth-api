const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const RefreshToken = require('../models/refreshToken.model');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new AppError("Invalid credentials", 401);

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new AppError("Invalid credentials", 401);

  // 🔑 Access Token (15 min)
  const accessToken = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  // 🔄 Refresh Token (7 days)
  const refreshToken = jwt.sign(
    { id: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '7d' }
  );

  // Save refresh token in DB
  await RefreshToken.create({
    user: user._id,
    token: refreshToken,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  });

  res.json({
    success: true,
    accessToken,
    refreshToken
  });
});

exports.refreshToken = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    throw new AppError("Refresh token required", 400);
  }

  // Check in DB
  const tokenDoc = await RefreshToken.findOne({ token: refreshToken });
  if (!tokenDoc) {
    throw new AppError("Invalid refresh token", 401);
  }

  // Verify token
  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

  // Generate new access token
  const newAccessToken = jwt.sign(
    { id: decoded.id },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );

  res.json({
    success: true,
    accessToken: newAccessToken
  });
});

exports.logout = asyncHandler(async (req, res) => {
  const { refreshToken } = req.body;

  await RefreshToken.deleteOne({ token: refreshToken });

  res.json({
    success: true,
    message: "Logged out successfully"
  });
});