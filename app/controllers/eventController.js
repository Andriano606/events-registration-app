const { fetchAllEvents } = require('../operations/events/index');
const { fetchAllEventUsers } = require('../operations/events/show');
const ejs = require('ejs');
const path = require('path');

exports.index = async (req, res) => {
  try {
    const { events, sort, order } = await fetchAllEvents(req);
    const body = await ejs.renderFile(path.join(__dirname, '../views/event/index.ejs'), { events, sort, order });
    const notice = req.flash('notice');
    res.render('layout', { body, notice });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.show = async (req, res) => {
  try {
    const { users, event, name } = await fetchAllEventUsers(req.params)
    const body = await ejs.renderFile(path.join(__dirname, '../views/event/show.ejs'), { users, event, name });
    res.render('layout', { body });
  } catch (error) {
    res.status(500).send(error.message);
  }
};