const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const router = require('./routes/api/members');
const app = express();

const PORT = process.env.PORT || 5000;




// MIDDLEWARE
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));  // handle url-encoded data

// ROUTE HANDLERS

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Route
app.use('/api/members', require('./routes/api/members'));


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}; http://localhost:${PORT}`)
});