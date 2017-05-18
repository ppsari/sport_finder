var express = require('express');
var router = express.Router();
var db = require('../../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let sport_id = req.query.sport_id
  let arr_sport = {}; //if detail undefined

  db.SportDetail.findAll({
    where: { sport_id: sport_id },
    include: [{ model: db.Sport}]
  })
  .then(details => {
    let flag_detail = (details.length > 0) ? true : false;
    if (!flag_detail) {
      arr_sport.sport_id = sport_id;
      db.Sport.findById(sport_id)
      .then((sport)=>{
        arr_sport.sport_name = sport.name;
        res.render('admin-detail', {flag_detail,arr_sport })

        // res.send(arr_sport);
      });

    } else {
      res.render('admin-detail', { details,flag_detail })
    }

  })
  .catch(err => {
    res.render('error', {message: "No Sport Found", error: err })
  })
});

router.get('/insert', function(req, res, next) {
  let sport_id = req.query.sport_id
  db.Sport.findById(sport_id)
  .then((sport) => {
    res.render('detail-create', {sport_id,sport_name:sport.name})
  })
  .catch(err => {
    res.render('error', {message: "Invalid Sport", error: err })
  })
});

router.post('/insert/', function(req, res, next) {
  let sport_id = req.body.sport_id
  db.SportDetail.create(req.body)
  .then(() => {
    res.redirect(`/admin/detail?sport_id=${sport_id}`)
  })
  .catch(err => {
    res.render('error', {message: "Invalid Data", error: err })
  })
});

router.get('/update/:id', function(req, res, next) {
  let id = req.params.id
  db.SportDetail.findById(id)
  .then(detail => {
    db.Sport.findById(detail.sport_id)
    .then((sport)=>{
      res.render('detail-update', {detail,sport_name:sport.name})
    })

  })
  .catch(err => {
    res.render('error', {message: "Invalid SportDetail ID", error: err })
  })
});

router.post('/update/:id', function(req, res, next) {
  let id = req.params.id
  db.SportDetail.findById(id)
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
    res.render('error', {message: "Invalid SportDetail ID", error: err })
  })
});

router.get('/delete/:id', function(req, res, next) {
  let id = req.params.id
  db.SportDetail.findById(id)
  .then(detail => {
    let sport_id = detail.sport_id
    detail.destroy()
    .then(() => {
      res.redirect(`/admin/detail?sport_id=${sport_id}`)
    })
  })
});

module.exports = router;
