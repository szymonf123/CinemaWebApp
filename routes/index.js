var express = require('express');
const mysql = require("mysql2");
var router = express.Router();

const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'cinema'
});

db.connect(function (err){
  if (err)
    throw err;
  console.log("Connected!");
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {title : 'Kinomaniak', phone : '123 456 789', email : 'admin@kinomaniak.pl'});
});

router.get('/admin', function(req, res) {
  res.render('admin', {title : 'Kinomaniak'});
});

router.get('/admin/insert_movie', function(req, res) {
  res.render('insert_movie', {title : 'Kinomaniak'});
});

router.get('/admin/update_movie', function(req, res) {
  res.render('update_movie', {title : 'Kinomaniak'});
});

router.get('/admin/delete_movie', function(req, res) {
  res.render('delete_movie', {title : 'Kinomaniak'});
});

router.get('/admin/insert_seance', function(req, res) {
  const sql = "SELECT * FROM movies";
  db.query(sql, (err, data) => {
    if (err)
      throw  err;
    res.render('insert_seance', {title : 'Kinomaniak', data : data});
  })
});

router.get('/admin/update_seance', function(req, res) {
  res.render('update_seance', {title : 'Kinomaniak'});
});

router.get('/admin/delete_seance', function(req, res) {
  res.render('delete_seance', {title : 'Kinomaniak'});
});

router.post('/admin/insert_movie/execute', function(req, res) {
  const data = {Title : req.body.title,
    Type : req.body.type,
    Studio : req.body.studio,
    Director : req.body.director,
    Cast : req.body.cast,
    Description : req.body.descr,
    Year : req.body.year,
    Age : req.body.age};
  let sql = "INSERT INTO movies SET ?";
  db.query(sql, data, (err) => {
    if (err)
      throw  err;
    res.send("Dodano nowy film");
  })
});

router.post('/admin/insert_seance/execute', function(req, res) {
  const data = {MovieID : req.body.ID,
  SeanceDate : req.body.seance_date,
  SeanceTime : req.body.seance_time};
  let sql = "INSERT INTO seances SET ?";
  db.query(sql, data, (err) => {
    if (err)
      throw  err;
    res.send("Dodano nowy seans");
  })
});

module.exports = router;
