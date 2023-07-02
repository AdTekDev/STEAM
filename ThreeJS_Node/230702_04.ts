/*
https://blog.luyencode.net/1000-bai-tap-lap-trinh-c-cua-thay-khang/
Cho 1 danh sách các số nguyên,
--> tìm các CẶP số CHẴN LIÊN TIẾP có trong danh sách này 
*/

let dsSoNguyen = [340, 56, 21, 3, 8, 67, 890, 32, -10, 90, 35, 86, 1];
// 0..N-1

let N = dsSoNguyen.length;

for (let i = 0; i < N-1; i=i+1) {
    if (dsSoNguyen[i] % 2 == 0 && dsSoNguyen[i+1] % 2 == 0) {
        console.log(dsSoNguyen[i], dsSoNguyen[i+1]);
    }
}
