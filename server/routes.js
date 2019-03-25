var express = require('express');
var router = express.router();

var breed_controller = require('./controller');

router.get('/breeds', breed_controller.breeds);

module.exports.router = router;