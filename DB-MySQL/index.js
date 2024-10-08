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
        res.send('University - Home Page!')
})

app.get('/giangvien', (req, res) => {
  connectionSQL.query("SELECT * FROM giangvien", function (err, result, fields) {
    if (err) 
        {
            res.send('Hello World!');
            throw err;
        }
        //res.send(result);
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        
        console.log(typeof(result), result.length, result[0].magv);
        for (var i = 0; i < result.length; i++){
            res.write(
                "<hr> <div>"
                + " <p> Ma so GV: " + result[i].magv + "</p>"
                + " <p> Ho ten GV: " + result[i].hotengv + "</p>"
                + " <p> Khoa: " + result[i].makhoa + "</p>"
                + "</div>"
            );
        }
        res.end();
  });

})

app.get('/load/:table', (req, res) => {
    //res.send('Hello World!')
    connectionSQL.query("SELECT * FROM " + req.params.table, function (err, result, fields) {
      if (err) 
          {
              res.send('tables !');
              throw err;
          }
          res.send(result);
    });
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})