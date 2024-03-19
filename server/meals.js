// routes/meals.js

const express = require('express');
const router = express.Router();
const Meal = require('../models/Meal');

// Route to get all meals
router.get('/', async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
