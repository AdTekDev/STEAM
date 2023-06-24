/*
https://blog.luyencode.net/1000-bai-tap-lap-trinh-c-cua-thay-khang/
Bài 110: 
Cần có tổng 200000 đồng từ 3 loại giấy bạc 1000 đồng, 2000 đồng, 5000 đồng. 
Lập chương trình để tìm ra tất cả các phương án có thể
*/

let SoTien = 200000;
let sodu = 0, sodu02 = 0;
let DanhSachToTienDangCo = [5000, 2000, 1000];
let i = 0, j=0, k=0, sotinhhuong=0;


for (i = 0; i <= (SoTien / 5000); i++) {  
    sodu = SoTien - i * 5000;
    for (j = 0; j <= (sodu / 2000); j++) { 
        sodu02 = sodu - j * 2000;
        k = sodu02 / 1000;
        sotinhhuong++;
        console.log("Tinh huong: ", sotinhhuong, ". KQ: ", i, " to 5k, ", j, " to 2k, ", k, " to 1k. " );
    }
}

