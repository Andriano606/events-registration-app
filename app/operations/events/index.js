const { Event, User } = require('../../models/associations');

class Index {
  static async fetchAllEvents() {
    try {
      const events = await Event.findAll({ order: [['event_date', 'DESC']] });
      return events;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Internal Server Error');
    }
  }
}

module.exports = Index;