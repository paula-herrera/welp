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
  deleteOne: () => {
    console.log('delete one')
  },
  deleteAll: () => {
    console.log('delete all')
  }
}

module.exports = controllers;