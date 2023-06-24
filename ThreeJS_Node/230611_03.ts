// Tìm cách đổi tiền từ 35.780.000 sang số tiền ít nhất
// có các tờ tiền 500.000  100.000 20.000 10.000


let SoTien = 35780000;
let sodu = 0;

// doi sang 500k truoc  
sodu = SoTien % 500000;
console.log( (SoTien-sodu) / 500000, " to 500k ");

// doi sang 100k truoc  
SoTien = sodu;
sodu = SoTien % 100000;
console.log( (SoTien-sodu) / 100000, " to 100k ");

// doi sang 20k   
SoTien = sodu;
sodu = SoTien % 20000;
console.log( (SoTien-sodu) / 20000, " to 20k ");

// doi sang 10k truoc  
SoTien = sodu;
sodu = SoTien % 10000;
console.log( (SoTien-sodu) / 10000, " to 10k ");