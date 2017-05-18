var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  //hardcode location & sport
  let locations = ["Jakarta Pusat", "Jakarta Utara", "Jakarta Barat", "Jakarta Timur", "Jakarta Selatan"]
  res.render('index', {locations})
});

module.exports = router;


//
// /
// /search?loc=1&sport=3
// /venue?id=1&sport=3
// /contact
// /about
// /faq