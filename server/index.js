var express = require('express');
var bodyParser = require('body-parser');
var port  =  process.env.PORT || 3000
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(__dirname + '/../client/dist'));


app.get('/', function (req, res) {
res.send('Hello');
});

app.post('/', function(req, res) {
  res.send("Received");
})

app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});