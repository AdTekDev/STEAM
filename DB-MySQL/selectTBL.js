var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "db01",
  port: 6033,
  password: "ABC123__azx&(){}.cvb",
  database: "huongdan"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM giangvien", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM giangvien", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});