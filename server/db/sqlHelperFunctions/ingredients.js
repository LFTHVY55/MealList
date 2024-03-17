// Import the client for database connection
const client = require('../client');

// Function to retrieve all ingredients from the database
async function getAllIngredients() {
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM ingredients');
    return result.rows;
  } catch (error) {
    console.error('Error retrieving ingredients:', error);
    return [];
  } finally {
    await client.end();
  }
}

// Export the function(s) for use in other files
module.exports = { getAllIngredients };
