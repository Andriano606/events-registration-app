const db = require('../db');

exports.getIndexPage = async (req, res) => {
  try {
    // Fetch events from database
    const { rows: events } = await db.query('SELECT * FROM events ORDER BY event_date DESC');
    // Render index page with events data
    res.render('index', { events });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
};