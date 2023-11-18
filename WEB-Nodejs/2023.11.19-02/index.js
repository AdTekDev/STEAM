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
    res.send("day la trang login !")
})

app.get("/logout", (req, res) => {
    res.send("day la trang logout !")
})

app.get("/sanpham", (req, res) => {
    res.send("day la trang San Pham !")
})

app.get("/thanhtoan", (req, res) => {
    res.send("<h1 style='color:red'>day la trang Thanh Toan !</h1>")
})

//-----------------------------------------------------
app.listen(PORT, () => {
    console.log(`WEB da mo tai CONG ${PORT}`)
})