const { Event, User } = require('../../models/associations');

class Index {
  static async fetchAllEvents(req) {
    try {
      const sort = req.query.sort || 'title';
      const order = req.query.order || 'ASC';
      const events = await Event.findAll({ order: [[sort, order]] });
      return { events, sort, order };
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Internal Server Error');
    }
  }
}

module.exports = Index;