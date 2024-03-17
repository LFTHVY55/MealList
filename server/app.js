const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

// Create Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Server initialization
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
