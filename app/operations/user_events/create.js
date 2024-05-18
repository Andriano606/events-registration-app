const { Event, User } = require('../../models/associations');

class Create {
  static async createParticipant(body) {
    const event = await Event.findOne({ where: { id: body.eventId } });

    if (!event) {
      console.error('Event not found');
      throw new Error('Event not found');
    }

    let user = await User.findOne({ where: { email: body.email } });
    if (!user) {
      if (!body.fullName || !body.email || !body.dob || !body.source) {
        throw new Error('All fields are required');
      }

      user = await User.create({
        fullName: body.fullName,
        email: body.email,
        dateOfBirth: body.dob,
        source: body.source
      });
    } else {
      const userEvents = await user.getEvents();
      const hasEvent = userEvents.some(userEvent => userEvent.id === event.id);

      if (hasEvent) {
        throw new Error('This user already has this event');
      }
    }
    
    if (user && event) {
      await user.addEvent(event);
    } else {
      throw new Error('user or event not found');
    }      
  }
}

module.exports = Create;