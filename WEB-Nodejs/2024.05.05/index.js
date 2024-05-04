express = require("express")
app = express()
path = require("path")
PORT = 80

app.use(express.static('public'))

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//setting view engine to ejs
app.set("view engine", "ejs");

// DATA 
var BookData = require('./data.json');

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
    console.log(BookData)
    res.render("sanpham", {booklist: BookData});
})

app.get("/sanpham/:id", (req, res) => {
    let dssp = 
        { 
            id:req.params.id, 
            title: "HP la con duong", 
            brief : "la mot cuon sach tich cuc ..", 
            linkImg : "/image/001.jpg"
        };
    res.render("sanphamChiTiet", {onebook: dssp});
})

app.get("/giohang", (req, res) => {
    res.render("giohang", {booklist: []});
})

app.post("/giohang", (req, res) => {
    console.log(req.body.dulieu);
    dl = JSON.parse(req.body.dulieu);
    bl = [];

    TongTien = 0.0;
    for (var book in dl) {
        giatri = dl[book][2] * dl[book][3];
        bl.push({
             "id": dl[book][0],
             "title": dl[book][1],
             "price": dl[book][2],
             "quantity": dl[book][3],
             "value" : giatri
        });
        TongTien += giatri;
    }
    res.render("giohang", {booklist: bl, tongtien: TongTien});
})

app.post("/thanhtoan", (req, res) => {
    console.log("Tong tien", 
        req.body.xTongTien,
        req.body.xDSSach);
    // tính tiền giao hàng ...

    res.render("thanhtoan", {
        ghtc: 19000 ,
        ghnh: 50000 ,
        ghst: 100000 ,
        tongtien: req.body.xTongTien
        , thanhtien: req.body.xTongTien
    });
})

app.post("/hoantat", (req, res) => {
    console.log(req.body.HoTen, req.body.eMail);
    res.render("hoantat", {
        tongtien: req.body.xTongTien, 
        thanhtien: req.body.xTongTien,
        HoTen: req.body.HoTen, 
        eMail : req.body.eMail,
        SoDienThoai : req.body.SoDienThoai,
        QuocGia : req.body.QuocGia,
        DiaChi : req.body.DiaChi,
        GiaoHang : req.body.GiaoHang,
        ThanhToan : req.body.ThanhToan,
        MKM : req.body.MKM,
    });
})

//-----------------------------------------------------
app.listen(PORT, () => {
    console.log(`WEB da mo tai CONG ${PORT}`)
})