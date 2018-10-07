var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/flocking', function(req, res, next) {
    res.render('flocking_basic');
});

router.get('/p5js-flocking', function(req, res, next) {
    res.render('p5js-flocking');
});

module.exports = router;
