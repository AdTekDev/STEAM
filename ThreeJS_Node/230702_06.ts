/*
https://blog.luyencode.net/1000-bai-tap-lap-trinh-c-cua-thay-khang/
Cho 1 danh sách các số nguyên,
-->  có các giá trị dạng Đối Xứng trong danh sách này 
*/

let dsSoNguyen = [1, 3, 6, 5, 5, 6, 3, 1];
// i (N-1-i)
let dem = 0;
let N = dsSoNguyen.length;

for (let i = 0; i <= N/2; i=i+1) {
    if (dsSoNguyen[i]  == dsSoNguyen[N-1-i]) {
        dem++;
    }
}
if (dem > N/2)
    console.log("Danh sach cac so Nguyen sap xep dang doi xung ");
else
    console.log("Danh sach KHONG doi xung ");