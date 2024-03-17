// Import Express
const express = require('express');

// Create Express router
const router = express.Router();

// Import SQL helper functions from the db directory
const { getMealsByFilter } = require('../db/sqlHelperFunctions/meals');

// GET meals by a specific filter value
router.get('/filter/:filterValue', async (req, res) => {
  const { filterValue } = req.params;
  try {
    const meals = await getMealsByFilter(filterValue);
    res.json(meals);
  } catch (error) {
    console.error('Error getting meals by filter:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Export the router
module.exports = router;
