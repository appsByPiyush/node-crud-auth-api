const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middlewares/auth.middleware');
const dashboardController = require('../controllers/dashboard.controller');

// 🔒 Only logged-in users
router.get('/', protect, dashboardController.getDashboard);

// 🔒 Only admin
router.get('/admin', protect, authorize('admin'), (req, res) => {
  res.json({ message: "Admin Dashboard" });
});

module.exports = router;