const operationNew = require('../operations/user_events/new');
const operationCreate = require('../operations/user_events/create');
const ejs = require('ejs');
const path = require('path');

exports.new = async (req, res) => {
  try {
    const event = await operationNew.getEvent(req.params)
    const body = await ejs.renderFile(path.join(__dirname, '../views/user_events/new.ejs'), { event });
    const error = req.flash('error');
    res.render('layout', { body, error });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.create = async (req, res) => {
  try {
    await operationCreate.createParticipant(req.body)
    req.flash('notice', 'Participant added successfully');
    res.redirect('/');
  } catch (error) {
    req.flash('error', error.message);
    res.redirect(`/register/${req.body.eventId}`);
  }
};