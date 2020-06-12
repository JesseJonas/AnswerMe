const express = require('express');
const app = express();
const Asks = require('../models/Asks');

app.use(express.json());

module.exports = {
  async index(req, res){
   Asks.findAll({ raw: true, order: [
     ['createdAt', 'desc']
   ] })
      .then((ask) => {
        res.json(ask);
      })
      .catch((err) => {
        res.json(err);
      })
  },

  async store(req, res){
    const { title } = req.body;
    const { body } = req.body;

    const asks = await Asks.create({
      title,
      body
    })
    
    return res.json(asks);
  }
}