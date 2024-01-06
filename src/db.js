const { Pool } = require('pg');
require('dotenv').config();

// Replace the connection string with your actual PostgreSQL connection string
const connectionString = process.env.CONNECTION1;

const pool = new Pool({
  connectionString: connectionString,
});

// Example query
pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    return console.error('Error executing query', err);
  }
  console.log('Connected to PostgreSQL database. Current timestamp:', result.rows[0].now);
});

module.exports = pool;

//CONNECTION1='postgresql://postgres:EVie1234@localhost:5432/schools'