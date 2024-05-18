const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  event_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  organizer: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'events'
});

module.exports = Event;