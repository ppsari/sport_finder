var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  //hardcode location & sport
  let locations = ["Jakarta Pusat", "Jakarta Utara", "Jakarta Barat", "Jakarta Timur", "Jakarta Selatan"]
  let sports = ["Futsal", "Mini Soccer", "Tennis", "Badminton", "Basketball", "Trampoline", "Archery", "Volleyball"]
  res.render('index', {locations, sports})
});

router.post('/', function(req,res,next) {
  let location = req.body.location
  let sport = req.body.sport
  res.redirect(`/search/?location=${location}&sport=${sport}`)
})

module.exports = router;


//
// /
// /search?loc=1&sport=3
// /venue?id=1&sport=3
// /contact
// /about
// /faq