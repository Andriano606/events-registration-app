const { fetchAllEvents } = require('../operations/events/index');
const { fetchAllEventUsers, fetchUsersCountByDate } = require('../operations/events/show');
const ejs = require('ejs');
const path = require('path');

exports.index = async (req, res) => {
  try {
    const { eventsData, sort, order, page } = await fetchAllEvents(req);

    if (page !== 1) {
      const eventCards = await ejs.renderFile(path.join(__dirname, '../views/event/partials/eventCards.ejs'), { eventsData });
      res.json({ eventCards });
    } else{
      const body = await ejs.renderFile(path.join(__dirname, '../views/event/index.ejs'), { eventsData, sort, order });
      const notice = req.flash('notice');
      res.render('layout', { body, notice });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.show = async (req, res) => {
  try {
    const { users, event, name } = await fetchAllEventUsers(req.params)
    const usersCountByDateArray = await fetchUsersCountByDate(req.params)
    const body = await ejs.renderFile(path.join(__dirname, '../views/event/show.ejs'), { users, event, name, usersCountByDateArray });
    res.render('layout', { body });
  } catch (error) {
    res.status(500).send(error.message);
  }
};