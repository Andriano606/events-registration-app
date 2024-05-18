const { Event, User } = require('../../models/associations');

class Show {
  static async fetchAllEventUsers(params) {
    try {
      const event = await Event.findByPk(params.id, {
        include: User
      });
      
      if (!event) {
        console.error('Event not found');
        throw new Error('Event not found');
      }

      return event.Users;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Internal Server Error');
    }
  }
}

module.exports = Show;