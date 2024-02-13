var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title : 'Kinomaniak', phone : '123 456 789', email : 'admin@kinomaniak.pl'});
});

router.get('/admin', function(req, res) {
  res.render('admin', {title : 'Kinomaniak'});
});

router.get('/insert_movie', function(req, res) {
  res.render('insert_movie', {title : 'Kinomaniak'});
});

router.get('/update_movie', function(req, res) {
  res.render('update_movie', {title : 'Kinomaniak'});
});

router.get('/delete_movie', function(req, res) {
  res.render('delete_movie', {title : 'Kinomaniak'});
});

router.get('/insert_seance', function(req, res) {
  res.render('insert_seance', {title : 'Kinomaniak'});
});

router.get('/update_seance', function(req, res) {
  res.render('update_seance', {title : 'Kinomaniak'});
});

router.get('/delete_seance', function(req, res) {
  res.render('delete_seance', {title : 'Kinomaniak'});
});

module.exports = router;
