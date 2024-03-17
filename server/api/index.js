// Import Express
const express = require('express');

// Create Express router
const router = express.Router();

// Define route prefixes for each section of your app
router.use('/meals', require('./meals'));
router.use('/ingredients', require('./ingredients'));

// Export the router
module.exports = router;
