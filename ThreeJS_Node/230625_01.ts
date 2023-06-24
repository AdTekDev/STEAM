// Tìm cách đổi tiền từ 35.780.000 sang số tiền ít nhất
// có các tờ tiền 500k 200k 100k  50k 20k 10k 5k 2k 1k 
// Sử dụng vòng lặp FOR + Danh sách các tờ tiền

let SoTien = 35781000;
let sodu = 0;
let DanhSachToTienDangCo = [500000, 200000, 100000, 50000,
    20000, 10000, 5000, 2000, 1000];

for (let i = 0; i <DanhSachToTienDangCo.length; i++) {  
    sodu = SoTien % DanhSachToTienDangCo[i];
    console.log( (SoTien-sodu) / DanhSachToTienDangCo[i], " to tien ", DanhSachToTienDangCo[i]);
    SoTien = sodu;
}

