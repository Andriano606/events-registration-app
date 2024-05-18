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

      const name = params.name || '';
      const users = Show.filterUsers(event.Users, name);

      return { users, event,  name };
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Internal Server Error');
    }
  }

  static filterUsers(users, name) {
    if (!name) return users;

    return users.filter(user => (user.fullName === name || user.email === name)); 
  }
}

module.exports = Show;