/*
Cho 1 danh sách các số nguyên, tìm số NHỎ nhất trong danh sách này 
*/

let dsSoNguyen = [340, 56, 21, 3, 8, 67, 890, 32, -10, 90, 35, 86, 1];

// Tìm số NHỎ nhất trong các số này ...

let soNhoNhat = dsSoNguyen[0];

for (let i = 1; i < dsSoNguyen.length; i++) {
    if (soNhoNhat > dsSoNguyen[i]) {
        soNhoNhat = dsSoNguyen[i];
    }
}

console.log(soNhoNhat);