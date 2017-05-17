var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let sport_id = req.query.sport_id
  db.Detail.findAll({
    where: { sport_id: sport_id }
  })
  .then(details => {
    res.render('admin-detail', { details })
  })
  .catch(err => {
    res.render('error', {message: "No Sport Found", error: err })
  })
});

router.get('/insert', function(req, res, next) {
  let sport_id = req.query.sport_id
  db.Sport.findById(sport_id)
  .then(() => {
    res.render('detail-create', {sport_id})
  })
  .catch(err => {
    res.render('error', {message: "Invalid Sport", error: err })
  })
});

router.post('/insert/', function(req, res, next) {
  let sport_id = req.body.sport_id
  db.Detail.create(req.body)
  .then(() => {
    res.redirect(`/admin/detail?sport_id=${sport_id}`)
  })
  .catch(err => {
    res.render('error', {message: "Invalid Data", error: err })
  })
});

router.get('/update/:id', function(req, res, next) {
  let id = req.params.id
  db.Detail.findById(id)
  .then(detail => {
    res.render('detail-update', {detail})
  })
  .catch(err => {
    res.render('error', {message: "Invalid Detail ID", error: err })
  })
});

router.post('/update/:id', function(req, res, next) {
  let id = req.params.id
  db.Detail.findById(id)
  .then(detail => {
    detail.update(req.body)
    .then(() => {
      let sport_id = req.body.sport_id
      res.redirect(`/admin/detail?sport_id=${sport_id}`)
    })
    .catch(err => {
      res.render('error', {message: "Invalid Data", error: err })
    })
  })
  .catch(err => {
    res.render('error', {message: "Invalid Detail ID", error: err })
  })
});

router.get('/delete/:id', function(req, res, next) {
  let id = req.params.id
  db.Detail.findById(id)
  .then(detail => {
    let sport_id = detail.sport_id
    detail.destroy()
    .then(() => {
      res.redirect(`/admin/detail?sport_id=${sport_id}`)
    })
  })
});

module.exports = router;
