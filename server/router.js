const express = require('express');
let router = express.Router();
const controllers = require('./controller');


router
  .route('/all')
  .get((req, res) => {
    controllers.getAll(req, res);
  })
  .delete((req, res) => {
    controllers.deleteAll(req, res);
  });

router
  .route('/add')
  .post((req, res) => {
    controllers.addOne(req, res);
  });

router
  .route('/deleteOne/:id')
  .delete((req, res) => {
    controllers.deleteOne(req, res);
  })

module.exports = router;