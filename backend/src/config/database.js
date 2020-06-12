require('dotenv').config();
const sequelize = require('sequelize');

// Conexão com a base de dados
const connection = new sequelize('answerme-react', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection;