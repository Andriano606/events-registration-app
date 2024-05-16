const Event = require('../models/event');

exports.getIndexPage = async (req, res) => {
  try {
    // Fetch events from database
    const events = await Event.findAll({ order: [['event_date', 'DESC']] });
    // Render index page with events data
    res.render('event/index', { events });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Internal Server Error');
  }
};