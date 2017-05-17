var express = require('express');
var router = express.Router();
var db = require('../../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.Venue.findAll()
  .then(venues => {
    res.render('admin-venue', { venues })
  })
  .catch(err => {
    res.render('error', {message: "No Venue List", error: err })
  })
});

router.get('/insert', function(req, res, next) {
  res.render('venue-create')
});

router.post('/insert', function(req, res, next) {
  db.Venue.create(req.body)
  .then(() => {
    res.redirect('/admin/venue')
  })
  .catch(err => {
    res.render('error', {message: "Invalid Data", error: err })
  })
});

router.get('/update/:id', function(req, res, next) {
  let id = req.params.id
  db.Venue.findById(id)
  .then(venue => {
    res.render('venue-update', {venue})
  })
  .catch(err => {
    res.render('error', {message: "Invalid Venue ID", error: err })
  })
});

router.post('/update/:id', function(req, res, next) {
  let id = req.params.id
  db.Venue.findById(id)
  .then(venue => {
    venue.update(req.body)
    .then(() => {
      res.redirect('/admin/venue')
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
  db.Venue.findById(id)
  .then(venue => {
    venue.destroy()
    .then(() => {
      res.redirect('/admin/venue')
    })
  })
});

module.exports = router;
