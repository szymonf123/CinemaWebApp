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
  const sql = "SELECT * FROM movies";
  db.query(sql, (err, data) => {
    if (err)
      throw  err;
    res.render('update_movie', {title : 'Kinomaniak', data : data});
  });
});

router.get('/admin/delete_movie', function(req, res) {
  const sql = "SELECT * FROM movies";
  db.query(sql, (err, data) => {
    if (err)
      throw  err;
    res.render('delete_movie', {title : 'Kinomaniak', data : data});
  });
});

router.get('/admin/insert_seance', function(req, res) {
  const sql = "SELECT * FROM movies";
  db.query(sql, (err, data) => {
    if (err)
      throw  err;
    res.render('insert_seance', {title : 'Kinomaniak', data : data});
  });
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
  });
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
  });
});

router.post("/admin/update_movie/execute", function (req, res){
  const data = {MovieID : req.body.ID,
    Title : req.body.title,
    Type : req.body.type,
    Studio : req.body.studio,
    Director : req.body.director,
    Cast : req.body.cast,
    Description : req.body.descr,
    Year : req.body.year,
    Age : req.body.age};
  let sql = "UPDATE movies SET";
  let more_than_one_column = false;
  if (data.Title !== ""){
    sql = sql + " Title = '" + data.Title + "'";
    more_than_one_column = true;
  }
  if (data.Type !== ""){
    if (more_than_one_column)
      sql = sql + ",";
    sql = sql + " Type = '" + data.Type + "'";
    more_than_one_column = true;
  }
  if (data.Studio !== ""){
    if (more_than_one_column)
      sql = sql + ",";
    sql = sql + " Studio = '" + data.Studio + "'";
    more_than_one_column = true;
  }
  if (data.Director !== ""){
    if (more_than_one_column)
      sql = sql + ",";
    sql = sql + " Director = '" + data.Director + "'";
    more_than_one_column = true;
  }
  if (data.Cast !== ""){
    if (more_than_one_column)
      sql = sql + ",";
    sql = sql + " Cast = '" + data.Cast + "'";
    more_than_one_column = true;
  }
  if (data.Description !== ""){
    if (more_than_one_column)
      sql = sql + ",";
    sql = sql + " Description = '" + data.Description + "'";
    more_than_one_column = true;
  }
  if (data.Year !== ""){
    if (more_than_one_column)
      sql = sql + ",";
    sql = sql + " Year = " + data.Year;
    more_than_one_column = true;
  }
  if (data.Age !== ""){
    if (more_than_one_column)
      sql = sql + ",";
    sql = sql + " Age = " + data.Age;
    more_than_one_column = true;
  }
  if (data.MovieID !== ""){
    sql = sql + " WHERE MovieID = " + data.MovieID;
    db.query(sql, (err) => {
      if (err)
        throw  err;
      res.send("Zmodyfikowano film");
    });
  }
  else {
    res.send("Nie wybrano filmu");
  }
});

router.post("/admin/delete_movie/execute", (req, res) => {
  const sql = "DELETE FROM movies WHERE MovieID IN (" + req.body.ID + ")";
  db.query(sql, (err) => {
    if (err)
      res.send("Brak możliwości usunięcia wybranych filmów");
    else
    res.send("Usunięto filmy");
  });
});

module.exports = router;
