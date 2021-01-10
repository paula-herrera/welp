const choice = require('../database/schema');

let controllers = {
  getAll: () => {
    console.log('get all')
  },
  addOne: () => {
    console.log('add one')
  },
  deleteOne: () => {
    console.log('delete one')
  },
  deleteAll: () => {
    console.log('delete all')
  }
}

module.exports = controllers;