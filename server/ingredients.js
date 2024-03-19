// routes/ingredients.js

const express = require('express');
const router = express.Router();
const Ingredient = require('../models/Ingredient');

// Route to get all ingredients
router.get('/', async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
