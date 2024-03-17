// Import the client for database connection
const client = require('../client');

// Function to retrieve all meals from the database
async function getAllMeals() {
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM meals');
    return result.rows;
  } catch (error) {
    console.error('Error retrieving meals:', error);
    return [];
  } finally {
    await client.end();
  }
}

// Export the function(s) for use in other files
module.exports = { getAllMeals };
