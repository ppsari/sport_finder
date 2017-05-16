var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  let location = req.query.location;
  let sport = req.query.sport;
  db.Venue.findAll({where: {location:location}, include: {model : db.Sport} }   )
  .then((venues)=>{
    venues = venues.filter((venue) => {
      let idx = -1;
      if (venue.Sports !== null && typeof venue.Sports !== 'undefined')
      idx = venue.Sports.findIndex((sp) => sp.name === sport );//end venues.sport
      if (idx !== -1) return venue.Sports;
    });//end venues.filter
    res.render('venueList',{venues});
  })
  .catch((err)=>{
    res.send('Location invalid!');
  })
});

module.exports = router;
