var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  let location = req.query.location;
  let sport = req.query.sport;

  db.Venue.findAll({
      where: { location: location }, include: {model: db.Sport, include:{model:db.SportDetail} }
    })
    .then((venues) => {

      venues = venues.filter((venue) => {
        let allsport = [];
        let idx =-1;
        //futsal,basket, golf,kasti
        venue.Sports.forEach((sp, i) => {
          allsport.push(sp.name);

          if (sp.name === sport){
            // res.send(sp.SportDetails);
            //futsal per lapangan
            let idx2 = -1;
            sp.SportDetails.forEach((dt)=>{
              if (dt.avail !== '') idx2 = 0;
            });

            if (idx2 !== -1) {
              idx = i;
            }
          }
        });
        //end sport

        allsport = allsport.filter((v, i, a) => a.indexOf(v) === i).join(', ');
        venue.allsport = allsport;
        if (idx !== -1) return venue;
      });

      // console.log('venue : ');
      // res.send(venues)
      res.render('venueList',{venues,sport_id:sport});


    })
    .catch((err) => {
      res.send('Location invalid!');
    })
});

module.exports = router;