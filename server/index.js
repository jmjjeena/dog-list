var express = require('express');
var bodyParser = require('body-parser');
var port  =  process.env.PORT || 3000
var app = express();
var {breeds, dogImages} = require('./mock-data');
var helper = require('./helper')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(__dirname + '/../client/dist'));


app.get('/', function (req, res) {
res.send('Hello');
});

app.get('/breeds', function(req, res) {
  // var breed = Object.keys(breeds)
  console.log(Object.keys(breeds));
  var breedNamesArray = Object.keys(breeds);
  res.send(breedNamesArray);
});

app.get('/images', function(req, res) {
  console.log('Recived get request for images: ', req.query.name)
  let breedName = req.query.name
  helper.getBreedImages(breedName, res)
})

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});