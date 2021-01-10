const choice = require('../database/index');

let controllers = {
  getAll: (req, res) => {
    choice.find({})
      .then(restaurants => {
        res.status(200).send(restaurants);
      })
      .catch(err => {
        res.sendStatus(500);
      })
  },
  addOne: (req, res) => {
    console.log('body: ', req.body)
    choice.create(req.body)
      .then(restaurant => {
        console.log('restaurant: ', restaurant)
        res.sendStatus(201);
      })
      .catch(err => {
        res.sendStatus(500);
      });
  },
  deleteOne: (req, res) => {
    choice.deleteOne({_id: req.params.id})
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.sendStatus(500);
      })
  },
  deleteAll: (req, res) => {
    choice.deleteMany({})
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => {
        res.sendStatus(500);
      })
  }
}

module.exports = controllers;