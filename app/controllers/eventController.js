const EventIndexOperation = require('../operations/events/index');

exports.getIndexPage = async (req, res) => {
  try {
    // Fetch events from database
    const events = await EventIndexOperation.fetchAllEvents();
    // Render index page with events data
    res.render('event/index', { events });
  } catch (error) {
    res.status(500).send(error.message);
  }
};