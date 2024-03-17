// Import the client for database connection
const client = require('./db/client');

// Function to drop existing tables
async function dropTables() {
  try {
    await client.connect();
    await client.query('DROP TABLE IF EXISTS meals, ingredients CASCADE');
    console.log('Tables dropped successfully');
  } catch (error) {
    console.error('Error dropping tables:', error);
  } finally {
    await client.end();
  }
}

// Function to create tables
async function createTables() {
  try {
    await client.connect();
    await client.query(`
      CREATE TABLE meals (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT
      );
      
      CREATE TABLE ingredients (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        quantity VARCHAR(100),
        meal_id INTEGER REFERENCES meals(id) ON DELETE CASCADE
      );
    `);
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    await client.end();
  }
}

// Function to populate tables
async function populateTables() {
  try {
    await client.connect();
    const { meals, ingredients } = require('./seedData');

    // Insert data into meals table
    for (const meal of meals) {
      await client.query(`
        INSERT INTO meals (name, description)
        VALUES ($1, $2)
      `, [meal.name, meal.description]);
    }

    // Insert data into ingredients table
    for (const ingredient of ingredients) {
      await client.query(`
        INSERT INTO ingredients (name, quantity)
        VALUES ($1, $2)
      `, [ingredient.name, ingredient.quantity]);
    }

    console.log('Tables populated successfully');
  } catch (error) {
    console.error('Error populating tables:', error);
  } finally {
    await client.end();
  }
}

// Call the functions
async function seedDatabase() {
  await dropTables();
  await createTables();
  await populateTables();
}

// Execute the seedDatabase function
seedDatabase();
