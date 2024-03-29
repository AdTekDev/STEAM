express = require("express")
app = express()
path = require("path")
PORT = 80

app.use(express.static('public'))

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
//-----------------------------------------------------

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/gioithieu", (req, res) => {
    res.sendFile(__dirname + "/views/gioithieu.html")
})

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html")
})

app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if ( 
        (username == "khang" && password == "k123") 
        || (username == "huy" && password == "huy!@#") 
        || (username == "tu" && password == "3t999") 
        ) {
        res.send("chao mung ban " + req.body.username + " da dang nhap vao he thong thanh cong !")
    } else {
        res.send("FAILED ! khi login !");
    }
    console.log(req.body)
})

app.get("/chaomung", (req, res) => {
    // query, params, body
    res.send("chao mung ban " + req.query.username + " " + req.query.password)
    console.log(req.query)
})

app.get("/logout", (req, res) => {
    res.sendFile(__dirname + "/views/logout.html")
})

app.get("/sanpham", (req, res) => {
    res.sendFile(__dirname + "/views/sanpham.html")
})

app.get("/thanhtoan", (req, res) => {
    res.sendFile(__dirname + "/views/thanhtoan.html")
})

//-----------------------------------------------------
app.listen(PORT, () => {
    console.log(`WEB da mo tai CONG ${PORT}`)
})