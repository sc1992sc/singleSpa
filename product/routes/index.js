var express = require('express');
var router = express.Router();
var configs = require('../public/apps.config.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', configs);
});

module.exports = router;
