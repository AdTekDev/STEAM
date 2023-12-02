express = require("express")
app = express()
path = require("path")
PORT = 80

app.use(express.static('public'))
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