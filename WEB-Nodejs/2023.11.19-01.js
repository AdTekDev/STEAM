express = require("express")
app = express()
PORT = 80
//-----------------------------------------------------

app.get("/", (req, res) => {
    res.send(
        "<h1>day la trang home !</h1>  \
        <p> Nội dun Hom giơi thiệu </p> \
        <img src='https://image.nhandan.vn/Uploaded/2023/unqxwpejw/2023_09_24/anh-dep-giao-thong-1626.jpg' />"
        )
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
    res.send("<h1 style='color:red'>day la trang Thanh Toan !</h1>")
})

//-----------------------------------------------------
app.listen(PORT, () => {
    console.log(`WEB da mo tai CONG ${PORT}`)
})
