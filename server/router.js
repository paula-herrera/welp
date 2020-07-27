var router = require('express').Router();
var controllers = require('./controllers.js');


router
.route('/all')
.get(controllers.getAll)
.delete(controllers.deleteAll)

router
.route('/add')
.post(controllers.addOne)

router
.route('/deleteOne/:id')
.delete(controllers.deleteOne)

// router
// .route('/signup')
// .get(controllers.getOne)

module.exports = router;