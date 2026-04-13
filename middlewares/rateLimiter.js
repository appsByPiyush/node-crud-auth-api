const rateLimit = require('express-rate-limit');

exports.apiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 min
  max: 100, // max 100 requests
  message: {
    success: false,
    message: "Too many requests, try again later"
  },
  standardHeaders: true,
  legacyHeaders: false,
});

exports.authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3, // only 3 login attempts
  message: {
    message: "Too many login attempts, try later"
  }
});