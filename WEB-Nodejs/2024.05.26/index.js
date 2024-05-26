express = require("express")
const { v4: uuidv4 } = require('uuid');
const date = require('date-and-time');

const sendEmail = require("./libSendEmail");

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
var KhuyenMai = require('./data_MaKhuyenMai.json');
var KhoSach = require('./data_KhoSach.json');

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
    console.log(BookData);
    console.log(KhoSach)
    res.render("sanpham", {booklist: BookData, kho: KhoSach });
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
    dl = JSON.parse(req.body.xDSSach);

    console.log("Tong tien", 
        req.body.xTongTien,
        //req.body.xDSSach
        dl
    );
    // tính tiền giao hàng ...
    trongluong = {};
    BookData.forEach( (bk) => {
        trongluong[bk.id] = bk.weight;
    } );

    TongKhoiLuong = 0;
    for( var k in dl) {
        TongKhoiLuong +=  dl[k].sl * trongluong[ Number(k) ];
    }

    soky= Math.round(TongKhoiLuong/1000);
    if (soky * 1000 + 100 < TongKhoiLuong)  soky++;
    if (soky == 0) soky = 1;

    console.log("Khoi luong", TongKhoiLuong, soky);

    ttThanhTien = Number(req.body.xTongTien);
    ttVanChuyen = soky*19000;
    ttTongTien = ttThanhTien + ttVanChuyen; //

    res.render("thanhtoan", {
        ghtc: soky*19000 ,
        ghnh: soky*50000 ,
        ghst: soky*100000 ,
        tongtien: ttTongTien
        , thanhtien: ttThanhTien
        , khoiluong : soky
        , vanchuyen : ttVanChuyen
        , khuyenmai :  JSON.stringify(KhuyenMai)
    });
})

app.post("/hoantat", (req, res) => {
    console.log(req.body.HoTen, req.body.eMail);
    const now  =  new Date(); 
    masodonhang = date.format(now,'YYMMDDHHmmss'); 
    //uuidv4();

    var infor = {
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
        MaDonHang : masodonhang,
    };

    sendEmail(infor);
    res.render("hoantat", infor);
})

//-----------------------------------------------------
app.listen(PORT, () => {
    console.log(`WEB da mo tai CONG ${PORT}`)
})