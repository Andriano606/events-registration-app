const operation = require('../operations/events/index');
const ejs = require('ejs');
const path = require('path');

exports.index = async (req, res) => {
  try {
    const events = await operation.fetchAllEvents();
    const body = await ejs.renderFile(path.join(__dirname, '../views/event/index.ejs'), { events });
    res.render('layout', { body });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.show = async (req, res) => {
  try {
    console.log('show event page')
  } catch (error) {
    res.status(500).send(error.message);
  }
};