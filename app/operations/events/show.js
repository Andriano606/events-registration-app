const { Event, User } = require('../../models/associations');
const { Op } = require('sequelize');

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

      const name = params.name;
      let users = [];
      if (name) {
        users = event.Users.filter(user => 
          user.fullName.includes(name) || user.email.includes(name)
        );
      } else {
        users = event.Users;
      }

      return { users, event,  name };
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Internal Server Error');
    }
  }

  static async fetchUsersCountByDate(params) {
    const event = await Event.findByPk(params.id, {
      include: User
    });
    
    if (!event) {
      console.error('Event not found');
      throw new Error('Event not found');
    }

    const usersCountByDate = event.Users.reduce((acc, user) => {
      const date = new Date(user.createdAt);
      const key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  
      if (!acc[key]) {
        acc[key] = 0;
      }
  
      acc[key]++;
  
      return acc;
    }, {});

    const usersCountByDateArray = Object.entries(usersCountByDate).map(([date, count]) => ({ date, count }));

    return usersCountByDateArray;
  }
}

module.exports = Show;