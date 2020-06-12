const sequelize = require('sequelize');
const connection = require('../config/database');

const Asks = connection.define('asks', {
  title: {
    type: sequelize.TEXT,
    allowNull: false
  },

  body: {
    type: sequelize.TEXT,
    allowNull: false
  }
});

Asks.sync({ force: false });

module.exports = Asks;
