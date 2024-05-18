const { Event, User } = require('../../models/associations');

class Create {
  static async createParticipant(body) {
    try {
      const event = await Event.findOne({ where: { id: body.eventId } });

      if (!event) {
        console.error('Event not found');
        throw new Error('Event not found');
      }

      let user = await User.findOne({ where: { email: body.email } });
      if (!user) {
        user = await User.create({
          fullName: body.fullName,
          email: body.email,
          dateOfBirth: body.dob,
          source: body.source
        });
      }
      
      if (user && event) {
        await user.addEvent(event);
      } else {
        throw new Error('user or event not found');
      }      
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Internal Server Error');
    }
  }
}

module.exports = Create;