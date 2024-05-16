const { Pool } = require('pg');

// Create a new Pool instance with your PostgreSQL database credentials
const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432, // Default PostgreSQL port
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
