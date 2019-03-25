var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

var dbURL = mongoose.connect('mongodb://localhost:27017/doggies', {useNewUrlParser: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected on ', dbURL);
})

module.exports = db