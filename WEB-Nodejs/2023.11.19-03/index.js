express = require("express")
app = express()
path = require("path")
PORT = 80
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