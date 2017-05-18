var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET venue detail */
router.get('/', function(req, res, next) {
  let venue_id = req.query.venue_id;
  let sport_id = req.query.sport_id;
  db.Venue.findOne({
      where: {
        id: venue_id
      },
      include: [{
        model: db.Sport,
        include: [{
          model: db.SportDetail
        }]
      }]
    }).then((venue) => {
      let idx = -1;
      idx = venue.Sports.findIndex((sport) => sport.name === sport_id);
      if (idx !== -1) {
        venue.Sports = venue.Sports[idx];
        res.render('detail-venue',{venue})
      } else {
        res.send('HAHAHAHAHA');
      }
    })
    .catch((err) => {
      res.send('Location invalid!');
    })
});

module.exports = router;