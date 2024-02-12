var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title : 'Kinomaniak', phone : '123 456 789', email : 'admin@kinomaniak.pl'});
});

router.get('/insert_movie', function(req, res, next) {
  res.render('insert_movie', {title : 'Kinomaniak', phone : '123 456 789'});
});

router.get('/admin', function(req, res, next) {
  res.render('admin', {title : 'Kinomaniak', phone : '123 456 789'});
});

module.exports = router;
