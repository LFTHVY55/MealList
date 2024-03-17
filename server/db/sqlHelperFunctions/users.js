// Import the client for database connection
const client = require('../client');

// Function to retrieve all users from the database
async function getAllUsers() {
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM users');
    return result.rows;
  } catch (error) {
    console.error('Error retrieving users:', error);
    return [];
  } finally {
    await client.end();
  }
}

// Function to retrieve a user by ID from the database
async function getUserById(userId) {
  try {
    await client.connect();
    const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
    return result.rows[0];
  } catch (error) {
    console.error('Error retrieving user by ID:', error);
    return null;
  } finally {
    await client.end();
  }
}

// Function to create a new user in the database
async function createUser(userData) {
  try {
    await client.connect();
    const result = await client.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [userData.name, userData.email]);
    return result.rows[0];
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  } finally {
    await client.end();
  }
}

// Function to update a user in the database
async function updateUser(userId, userData) {
  try {
    await client.connect();
    const result = await client.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [userData.name, userData.email, userId]);
    return result.rows[0];
  } catch (error) {
    console.error('Error updating user:', error);
    return null;
  } finally {
    await client.end();
  }
}

// Function to delete a user from the database
async function deleteUser(userId) {
  try {
    await client.connect();
    const result = await client.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
    return result.rows[0];
  } catch (error) {
    console.error('Error deleting user:', error);
    return null;
  } finally {
    await client.end();
  }
}

// Export all functions for use in other files
module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
