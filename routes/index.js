var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  //hardcode location & sport
  res.render('index',{});

});

module.exports = router;


//
// /
// /search?loc=1&sport=3
// /venue?id=1&sport=3
// /contact
// /about
// /faq