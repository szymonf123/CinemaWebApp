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

router.get('/admin/update_seance', async function(req, res) {
  try {
    const sql = "SELECT *, DATE_FORMAT(SeanceDate, '%d.%m.%Y') AS FormattedDate FROM movies NATURAL JOIN seances";
    const moviesQuery = "SELECT MovieID, Title FROM movies";

    // Wykonanie obu zapytań równolegle
    const [seances, movies] = await Promise.all([
      new Promise((resolve, reject) => {
        db.query(sql, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      }),
      new Promise((resolve, reject) => {
        db.query(moviesQuery, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      })
    ]);

    // Przekazanie wyników do widoku
    res.render('update_seance', { title: 'Kinomaniak', data: seances, movies: movies });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Wystąpił błąd podczas pobierania danych.");
  }
});

router.get('/admin/delete_seance', function(req, res) {
  const sql = "SELECT *, DATE_FORMAT(SeanceDate, '%d.%m.%Y') AS FormattedDate FROM movies NATURAL JOIN seances";
  db.query(sql, (err, data) => {
    if (err)
      throw  err;
    res.render('delete_seance', {title : 'Kinomaniak', data : data});
  });
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
  if (Object.values(data).some(value => value === "")) {
    res.render("notification", {
      title: "Kinomaniak",
      notification: "Błąd dodawania filmu. Wymagane pola nie zostały uzupełnione."
    });
    return;
  }
  let sql = "INSERT INTO movies SET ?";
  db.query(sql, data, (err) => {
    if (err)
      res.render("notification", {title : "Kinomaniak", notification : "Błąd dodawania filmu"});
    else
      res.render("notification", {title : "Kinomaniak", notification : "Dodano nowy film"});
  });
});

router.post('/admin/insert_seance/execute', function(req, res) {
  const data = {MovieID : req.body.ID,
  SeanceDate : req.body.seance_date,
  SeanceTime : req.body.seance_time};
  if (Object.values(data).some(value => value === "")) {
    res.render("notification", {
      title: "Kinomaniak",
      notification: "Błąd dodawania seansu. Wymagane pola nie zostały uzupełnione."
    });
    return;
  }
  let sql = "INSERT INTO seances SET ?";
  db.query(sql, data, (err) => {
    if (err)
      res.render("notification", {title : "Kinomaniak", notification : "Błąd dodawania seansu"});
    else
      res.render("notification", {title : "Kinomaniak", notification : "Dodano nowy seans"});
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
  }
  if (data.MovieID !== ""){
    sql = sql + " WHERE MovieID = " + data.MovieID;
    db.query(sql, (err) => {
      if (err){
        res.render("notification", {title : "Kinomaniak", notification : "Błąd w modyfikacji filmu"});
      }
      res.render("notification", {title : "Kinomaniak", notification : "Zmodyfikowano film"});
    });
  }
  else {
    res.render("notification", {title : "Kinomaniak", notification : "Nie wybrano filmu"});
  }
});

router.post("/admin/update_seance/execute", (req, res) => {
  const data = {
    SeanceID : req.body.ID,
    MovieID : req.body.movie_id,
    SeanceDate: req.body.seance_date,
    SeanceTime: req.body.seance_time
  };
  let sql = "UPDATE seances SET";
  let more_than_one_column = false;
  if (data.MovieID !== ""){
    sql = sql + " MovieID = " + data.MovieID + "";
    more_than_one_column = true;
  }
  if (data.SeanceDate !== ""){
    if (more_than_one_column)
      sql = sql + ",";
    sql = sql + " SeanceDate = '" + data.SeanceDate + "'";
    more_than_one_column = true;
  }
  if (data.SeanceTime !== ""){
    if (more_than_one_column)
      sql = sql + ",";
    sql = sql + " SeanceTime = '" + data.SeanceTime + ":00'";
  }
  if (data.SeanceID !== ""){
    sql = sql + " WHERE SeanceID = " + data.SeanceID;
    console.log(sql);
    db.query(sql, (err) => {
      if (err){
        res.render("notification", {title : "Kinomaniak", notification : "Błąd w modyfikacji seansu"});
      }
      res.render("notification", {title : "Kinomaniak", notification : "Zmodyfikowano seans"});
    });
  }
  else {
    res.render("notification", {title : "Kinomaniak", notification : "Nie wybrano seansu"});
  }
});

router.post("/admin/delete_movie/execute", (req, res) => {
  const sql = "DELETE FROM movies WHERE MovieID IN (" + req.body.ID + ")";
  db.query(sql, (err) => {
    if (err)
      res.render("notification", {title : "Kinomaniak", notification : "Brak możliwości usunięcia wybranych filmów. Najprawdopodobniej istnieją seanse tego filmu lub nie wybrano filmów."});
    else
      res.render("notification", {title : "Kinomaniak", notification : "Usunięto wybrane filmy"});
  });
});

router.post("/admin/delete_seance/execute", (req, res) => {
  const sql = "DELETE FROM seances WHERE SeanceID IN (" + req.body.ID + ")";
  db.query(sql, (err) => {
    if (err)
      res.render("notification", {title : "Kinomaniak", notification : "Błąd usuwania seansów"});
    else
      res.render("notification", {title : "Kinomaniak", notification : "Usunięto wybrane seanse"});
  });
});

module.exports = router;
