const { Event, User } = require('../../models/associations');

class Index {
  static async fetchAllEvents(req) {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const limit = parseInt(req.query.limit, 10) || 10;
      const offset = (page - 1) * limit;
      const sort = req.query.sort || 'title';
      const order = req.query.order || 'ASC';

      const events = await Event.findAll({
        limit,
        offset,
        order: [[sort, order]]
      });

      return { events, sort, order, page };
    } catch (error) {
      console.error('Error fetching events:', error);
      throw new Error('Internal Server Error');
    }
  }
}

module.exports = Index;