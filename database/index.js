var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/welp';
var choiceSchema = require('./schema.js');
mongoose.Promise = global.Promise;

// Connect Mongoose to our local MongoDB via URI specified above and export it below

var db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {console.log('connected to mongo')})

// Register the schema with Mongoose as the 'Choice' collection.
var Choice = mongoose.model('Choice', choiceSchema);

module.exports = Choice;