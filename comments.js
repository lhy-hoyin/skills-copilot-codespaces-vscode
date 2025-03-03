// Create web server
// Connect to database
// Create API
// Create routes
// Create comments
// Get comments
// Update comments
// Delete comments

// Create web server
const express = require('express');
const app = express();

// Connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });

// Create API
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create routes
const comments = require('./comments');
app.use('/comments', comments);

// Start server
app.listen(3000, () => {
    console.log('Server has started');
});