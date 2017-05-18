var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  let location = req.query.location;
  let sport = req.query.sport;

  db.Venue.findAll({
      where: { location: location }, include: {model: db.Sport }
    })
    .then((venues) => {
      venues = venues.filter((venue) => {
        let allsport = [];
        let idx =-1;
        venue.Sports.forEach((sp, i) => {
          allsport.push(sp.name);
          if (sp.name === sport) idx = i;
        });
        allsport = allsport.filter((v, i, a) => a.indexOf(v) === i).join(', ');
        venue.allsport = allsport;
        if (idx !== -1) return venue;
      });
      res.render('venueList',{venues,sport_id:sport});
    })
    .catch((err) => {
      res.send('Location invalid!');
    })
});

module.exports = router;