const Event = require('../../models/event');

class EventIndexOperation {
  static async fetchAllEvents() {
    try {
      // Fetch events from database
      const events = await Event.findAll({ order: [['event_date', 'DESC']] });
      return events;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Internal Server Error');
    }
  }
}

module.exports = EventIndexOperation;