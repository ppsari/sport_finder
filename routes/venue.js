var express = require('express');
var router = express.Router();
var db = require('../models');



/* GET users listing. */
router.get('/', function(req, res, next) {
  let venue_id = req.query.venue_id;
  let sport_id = req.query.sport_id;
  db.Venue.findById(venue_id, include: [{model: db.Sport}])
  .then((venue)=>{
    venue.Sport.findById(sport_id, include: [{model: db.Detail}])
    .then(sport => {
      // venue.pop()
      res.render('user-venue', { venue: venue, sport: sport })
    })
  })
  .catch((err)=>{
    res.send('Location invalid!');
  })
});

module.exports = router;
