express = require("express")
app = express()
PORT = 80
//-----------------------------------------------------

app.get("/", (req, res) => {
    res.send("day la trang home !")
})

app.get("/gioithieu", (req, res) => {
    res.send("day la trang Gioi Thieu !")
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
    res.send("day la trang Thanh Toan !")
})

//-----------------------------------------------------
app.listen(PORT, () => {
    console.log(`WEB da mo tai CONG ${PORT}`)
})
