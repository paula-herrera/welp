// initialize database here
var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/welp';
var choiceSchema = require('./schema');

// Connect Mongoose to our local MongoDB via URI specified above and export it below

var db = mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => { console.log('Connected to mongodb')});

// Register the schema with Mongoose as the 'Choice' collection.

var Choice = mongoose.model('Choice', choiceSchema);

module.exports = choice;