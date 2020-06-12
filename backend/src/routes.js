const express = require('express');
const routes = express.Router();

const AsksController = require('./controllers/AsksController');

routes.get('/', AsksController.index);

routes.post('/ask', AsksController.store);

module.exports = routes;