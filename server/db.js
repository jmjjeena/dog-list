var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://localhost/doggies');
var db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connected on ', dbURL);
})

module.exports = db