const asyncHandler = require('../utils/asyncHandler');

exports.getDashboard = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    message: "Welcome to dashboard",
    user: req.user
  });
});