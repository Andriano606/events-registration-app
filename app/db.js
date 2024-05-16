const { Pool } = require('pg');

// Create a new Pool instance with your PostgreSQL database credentials
const pool = new Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_URL,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432, // Default PostgreSQL port
});

// Create events table if not exists
pool.query(`
  CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    organizer VARCHAR(255)
  );
`)
  .then(() => console.log('Events table created successfully'))
  .catch(error => console.error('Error creating events table:', error));

module.exports = {
  query: (text, params) => pool.query(text, params),
};
