require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: 'Server error', error: err.messae});
});

module.exports = app;