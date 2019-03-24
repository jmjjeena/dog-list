var express = require('express');
// var bodyParser = require('body-parser');
// var db = require('../database-mysql');

var app = express();

// app.use( bodyParser.json() );
// app.use(express.static(__dirname + '/../react-client/dist'));



app.get('/api/users', function (req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});