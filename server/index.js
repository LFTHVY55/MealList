// Import Express
const express = require('express');

// Create Express app
const app = express();

let meals = [
  { id: 1, name: 'Breakfast', description: 'Scrambled eggs and toast' },
  { id: 2, name: 'Lunch', description: 'Chicken salad' },
  { id: 3, name: 'Dinner', description: 'Grilled salmon with vegetables' },
  { id: 4, name: 'Snack', description: 'Fruit salad' },
  { id: 5, name: 'Dessert', description: 'Chocolate cake' },
  { id: 6, name: 'Brunch', description: 'Avocado toast' },
  { id: 7, name: 'Appetizer', description: 'Caprese salad' },
  { id: 8, name: 'Side dish', description: 'Garlic mashed potatoes' },
  { id: 9, name: 'Soup', description: 'Tomato basil soup' },
  { id: 10, name: 'Dessert', description: 'Apple pie' }
];

// Create a router for API routes
const apiRouter = express.Router();

// Add the /api prefix to all routes defined in the router
app.use('/api', apiRouter);

// Define a route to get a specific meal by ID
apiRouter.get('/meals/:id', (req, res) => {
  const { id } = req.params;
  const meal = meals.find(meal => meal.id === parseInt(id));
  if (meal) {
    res.json(meal);
  } else {
    res.status(404).json({ error: 'Meal not found' });
  }
});

// Define a route to get all meals
apiRouter.get('/meals', (req, res) => {
  res.json(meals);
});

// Define the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
