/*
https://blog.luyencode.net/1000-bai-tap-lap-trinh-c-cua-thay-khang/
Cho 1 danh sách các số nguyên,
--> tìm các CẶP số CHIA HẾT 10 LIÊN TIẾP + Đếm số lượng Cặp này có trong danh sách này 
*/

let dsSoNguyen = [340, 56, 21, 3, 8, 67, 890, 32, -10, 90, 35, 86, 1];
// 0..N-1
let dem = 0;
let N = dsSoNguyen.length;

for (let i = 0; i < N-1; i=i+1) {
    if (dsSoNguyen[i] % 10 == 0 && dsSoNguyen[i+1] % 10 == 0) {
        console.log(dsSoNguyen[i], dsSoNguyen[i+1]);
        dem++;
    }
}

console.log(dem, "cap so lien tiep thoa man dieu kien tren !!!");