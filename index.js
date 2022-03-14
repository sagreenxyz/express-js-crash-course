const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

// ROUTE HANDLERS

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}; http://localhost:${PORT}`)
});