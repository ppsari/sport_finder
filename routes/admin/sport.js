var express = require('express');
var router = express.Router();
var db = require('../../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  let venue_id = req.query.venue_id
  db.Sport.findAll({
    where: { venue_id: venue_id },
    include: [{ model: db.Venue}]
  })
  .then(sports => {
    let breadcrumbs = [{url:`/admin/venue/`,teks:'Venue'},{url:'',teks:'Sport'}]

    let flag_sport = (sports.length > 0) ? true : false;
    if (!flag_sport) {
      let arr_venue = {};
      arr_venue.venue_id = venue_id;
      db.Venue.findById(venue_id)
      .then((venue)=>{
        arr_venue.venue_name = venue.name;
        // console.log(arr_venue);
        res.render('admin-sport', {flag_sport,breadcrumbs,arr_venue })
      });

    } else {
      res.render('admin-sport', { sports,breadcrumbs,flag_sport })
    }
  })
  .catch(err => {
    res.render('error', {message: "No Venue List Found", error: err })
  })
});

router.get('/insert', function(req, res, next) {
  let venue_id = req.query.venue_id
  db.Venue.findById(venue_id)
  .then((venue) => {
    let breadcrumbs = [{url:`/admin/venue/`,teks:'Venue'},{url:`/admin/sport?venue_id=${venue_id}`,teks:'Sport'},{url:'',teks:'Insert'}]
    res.render('sport-create', {venue_id,venue_name:venue.name,breadcrumbs})
  })
  .catch(err => {
    res.render('error', {message: "Invalid Venue", error: err })
  })
});

router.post('/insert/', function(req, res, next) {
  let venue_id = req.body.venue_id
  db.Sport.create(req.body)
  .then(() => {
    res.redirect(`/admin/sport?venue_id=${venue_id}`)
  })
  .catch(err => {
    res.render('error', {message: "Invalid Data", error: err })
  })
});

router.get('/update/:id', function(req, res, next) {
  let id = req.params.id
  db.Sport.findById(id)
  .then(sport => {
      db.Venue.findById(sport.venue_id)
      .then((venue)=>{
        let breadcrumbs = [{url:`/admin/venue/`,teks:'Venue'},{url:`/admin/sport?venue_id=${sport.venue_id}`,teks:'Sport'},{url:'',teks:'Update'}]
        // res.render('sport-create', {venue_id,venue_name:venue.name,breadcrumbs})
        res.render('sport-update', {sport,venue_name:venue.name,breadcrumbs})
      })

  })
  .catch(err => {
    res.render('error', {message: "Invalid Sport ID", error: err })
  })
});

router.post('/update/:id', function(req, res, next) {
  let id = req.params.id
  db.Sport.findById(id)
  .then(sport => {
    sport.update(req.body)
    .then(() => {
      let venue_id = req.body.venue_id
      res.redirect(`/admin/sport?venue_id=${venue_id}`)
    })
    .catch(err => {
      res.render('error', {message: "Invalid Data", error: err })
    })
  })
  .catch(err => {
    res.render('error', {message: "Invalid Sport ID", error: err })
  })
});

router.get('/delete/:id', function(req, res, next) {
  let id = req.params.id
  db.Sport.findById(id)
  .then(sport => {
    let venue_id = sport.venue_id
    sport.destroy()
    .then(() => {
      res.redirect(`/admin/sport?venue_id=${venue_id}`)
    })
  })
});

module.exports = router;
