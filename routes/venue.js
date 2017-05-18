var express = require('express');
var router = express.Router();
var db = require('../models');



/* GET users listing. */
router.get('/', function(req, res, next) {
  let venue_id = req.query.venue_id;
  let sport_id = parseInt(req.query.sport_id);
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
    })
    // db.Venue.findOne({where:{id:venue_id}, include: [{model: db.Sport}]})
    .then((venue) => {
      let idx = -1;
      // res.send(venue);
      // venue.Sports.findAll({
      //   include: [db.SportDetail.f]
      // }).then((sports) => {
      //   res.send(sports)
      // });
      idx = venue.Sports.findIndex((sport) => sport.id === sport_id);
      if (idx !== -1) {
        res.send(venue.Sports[idx].SportDetails)
      } else {
        res.send('HAHAHAHAHA');
      }
      // res.send(venue.Sports[0]);


      // venue.Sports.findOne({
      //     where: {
      //       id: sport_id
      //     }
      //   })
      //   .then((sport) => {
      //     res.send('dapet')
      //     res.send(sport);
      //     // venue.pop()
      //     // res.render('user-venue', { venue: venue, sport: sport })
      //   }).catch((err) => {
      //     res.send('err di sport lel');
      //
      //     res.send(err);
      //   })
    })
    .catch((err) => {
      // res.send(err);
      res.send('Location invalid!');
    })
});

module.exports = router;