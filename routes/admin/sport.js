var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let venue_id = req.query.venue_id
  db.Sport.findAll({
    where: { venue_id: venue_id }
  })
  .then(sports => {
    res.render('admin-sport', { sports })
  })
  .catch(err => {
    res.render('error', {message: "No Venue List", error: err })
  })
});

router.get('/insert', function(req, res, next) {
  let venue_id = req.query.venue_id
  db.Venue.findById(venue_id)
  .then((venue) => {
    res.render('sport-create', {venue_id})
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
    res.render('sport-update', {sport})
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
    res.render('error', {message: "Invalid Venue ID", error: err })
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
