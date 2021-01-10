const express = require('express');
let router = express.Router();
const controllers = require('./controller');


router
  .route('/all')
  .get((res, req) => {
    controllers.getAll();
  })
  .delete((req, res) => {
    controllers.deleteAll();
  });

router
  .route('/add')
  .post((req, res) => {
    controllers.addOne();
  });

router
  .route('/deleteOne/:id')
  .delete((req, res) => {
    controllers.deleteOne();
  })

module.exports = router;