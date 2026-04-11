const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');
const dashboardRoutes = require('./routes/dashboard.routes');
const { errorHandler } = require('./middlewares/error.middleware');

app.use(express.json());
app.get('/', (req,res)=>{
    res.status(200).json({ message: "Hello World" });
});
app.get('/api', (req,res)=>{
    res.status(200).json({ message: "Hello Api" });
});
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Error middleware
app.use(errorHandler);

module.exports = app;