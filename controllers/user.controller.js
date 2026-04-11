const userService = require('../services/user.service');
const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/appError');

exports.createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json({ success: true, data: user });
});

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await userService.getUsers();
  res.json({ success: true, data: users });
});

exports.getUser = asyncHandler(async (req, res) => {
  const user = await userService.getUserById(req.params.id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.json({ success: true, data: user });
});

exports.updateUser = asyncHandler(async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.json({ success: true, data: user });
});

exports.deleteUser = asyncHandler(async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ success: true, message: "User deleted" });
});