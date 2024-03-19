// server.js

const express = require('express');
const app = express();
const mealsRouter = require('./routes/meals');
const ingredientsRouter = require('./routes/ingredients');

// Define routes
app.use('/api/meals', mealsRouter);
app.use('/api/ingredients', ingredientsRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
