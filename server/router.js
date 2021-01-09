const express = require('express');
let router = express.Router();

router
  .route('/all')
  .get((res, req) => {
    console.log('get /all');
  })
  .delete((req, res) => {
    console.log('delete /all');
  });

router
  .route('/add')
  .post((req, res) => {
    console.log('post /add');
  });

router
  .route('/deleteOne/:id')
  .delete((req, res) => {
    console.log('delete /deleteOne/:id')
  })

module.exports = router;