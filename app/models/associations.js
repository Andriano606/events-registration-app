// models/associations.js
const User = require('./user');
const Event = require('./event');

User.belongsToMany(Event, { through: 'UserEvents', foreignKey: 'userId' });
Event.belongsToMany(User, { through: 'UserEvents', foreignKey: 'eventId' });

module.exports = { User, Event };