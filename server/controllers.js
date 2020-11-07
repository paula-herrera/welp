const choice = require('../database/index.js');

let controllers = {
    getAll: (req, res) => {
        choice.find({})
          .then((result) => {
              res.status(200).json(result);
          })
          .catch((err) => {
              res.status(400).send(err);
          })
    },
    addOne: (req, res) => {
        choice.create(req.body)
        .then((response) => {
          res.status(200).send('Posted');
        })
        .catch((err) => {
          res.status(400).send(err);
        })
    },
    deleteAll: (req, res) => {
        choice.deleteMany({})
          .then((response) => {
              res.status(200).send('Deleted');
          })
          .catch((err) => {
              res.status(400).send(err);
          })
    },
    deleteOne: (req, res) => {
        choice.deleteOne({ _id: req.params.id})
        .then((response) => {
            res.status(200).send('Deleted');
        })
        .catch((err) => {
            res.status(400).send(err);
        })
    }
}

module.exports = controllers;