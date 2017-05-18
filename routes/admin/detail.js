var express = require('express');
var router = express.Router();
var db = require('../../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let sport_id = req.query.sport_id;
  let venue_id = '';
  let arr_sport = {}; //if detail undefined

  db.Sport.findById(sport_id)
  .then(sport=>{
    venue_id = sport.venue_id;
    arr_sport.sport_id = sport_id;
    arr_sport.sport_name = sport.name;
    let breadcrumbs = [{url:`/admin/venue/`,teks:'Venue'},{url:`/admin/sport?venue_id=${venue_id}`,teks:'Sport'}]

    db.SportDetail.findAll({
      where: { sport_id: sport_id }
    })
    .then(details => {
      let flag_detail = (details.length > 0) ? true : false;
      if (!flag_detail) {
        res.render('admin-detail', {flag_detail,arr_sport,breadcrumbs })
      } else {
        details.sport_name = arr_sport.sport_name
        details.sport_id = arr_sport.sport_id
        res.render('admin-detail', { details,flag_detail,breadcrumbs })
      }

    })
    .catch(err => {
      res.render('error', {message: "No Sport Found", error: err })
    })

  })




});

router.get('/insert', function(req, res, next) {
  let sport_id = req.query.sport_id
  db.Sport.findById(sport_id)
  .then((sport) => {
    let breadcrumbs = [{url:`/admin/venue/`,teks:'Venue'},{url:`/admin/sport?venue_id=${sport.venue_id}`,teks:'Sport'},{url:'',teks:'Insert'}]

    res.render('detail-create', {sport_id,sport_name:sport.name,breadcrumbs:breadcrumbs})
  })
  .catch(err => {
    res.render('error', {message: "Invalid Sport", error: err,breadcrumbs:breadcrumbs })
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
      let breadcrumbs = [{url:`/admin/venue/`,teks:'Venue'},{url:`/admin/sport?venue_id=${sport.venue_id}`,teks:'Sport'},{url:'',teks:'Update'}]
      res.render('detail-update', {detail,sport_name:sport.name,breadcrumbs:breadcrumbs})
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
