const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')
const app = express();

const PORT = process.env.PORT || 5000;

const members = require('./Members');



// MIDDLEWARE
// app.use(logger);

// ROUTE HANDLERS

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for Get Members
app.get('/api/members', (req, res) => {
    res.json(members);
});

app.get('/api/members/:id', (req, res) => {
    res.send(req.params.id);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}; http://localhost:${PORT}`)
});