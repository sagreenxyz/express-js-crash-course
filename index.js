const express = require('express');
const path = require('path');
const moment = require('moment');

const app = express();

const PORT = process.env.PORT || 5000;

const members = require('./Members');

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};

// MIDDLEWARE
app.use(logger);

// ROUTE HANDLERS

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for Get Members
app.get('/api/members', (req, res) => {
    res.json(members);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}; http://localhost:${PORT}`)
});