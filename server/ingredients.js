// Import Express
const express = require('express');

// Create Express router
const router = express.Router();

// Import SQL helper functions from the db directory
const { getAllIngredients } = require('../db/sqlHelperFunctions/ingredients');

// Define routes for ingredients section
router.get('/', async (req, res) => {
  try {
    const ingredients = await getAllIngredients();
    res.json(ingredients);
  } catch (error) {
    console.error('Error getting ingredients:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Export the router
module.exports = router;
