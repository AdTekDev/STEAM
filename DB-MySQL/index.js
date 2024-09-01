const express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql2');

var connectionSQL = mysql.createConnection({
  host: "localhost",
  user: "db01",
  port: 6033,
  password: "ABC123__azx&(){}.cvb",
  database: "huongdan"
});

connectionSQL.connect(function(err) {
    if (err) throw err;});


app.get('/', (req, res) => {
  //res.send('Hello World!')
  connectionSQL.query("SELECT * FROM giangvien", function (err, result, fields) {
    if (err) 
        {
            res.send('Hello World!');
            throw err;
        }
        res.send(result);
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})