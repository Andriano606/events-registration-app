const { Event } = require('../../models/associations');

class New {
  static async getEvent(params) {
    try {
      const event = await Event.findByPk(params.id);
      return event;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Internal Server Error');
    }
  }
}

module.exports = New;