// Import the Client class from the pg package
const { Client } = require('pg');

// Define the name of your database
const dbName = "foodlist";

// Create a new instance of the Client class with the connection URL
const client = new Client(`postgres://localhost:54321/${dbName}`);

// Export the client object so that it can be imported and used in other files
module.exports = client;
