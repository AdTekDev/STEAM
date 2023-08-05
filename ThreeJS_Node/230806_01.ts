/*
Cho 1 danh sách các Tên Học Sinh trong lớp,
-->  sắp xếp theo tứ tự ABC
*/
let dsTenHocSinh = [ "An", "Minh", "Bình", "Chính", "Kình", "Văn", "Hòa"];
let dsHoHocSinh = [ "Nguyễn Văn", "Phạm Văn", "Doãn Chí", "Đổng Thành", 
                    "Bùi Xuân", "Dương Chí", "Hậu Thái"];

let N = dsTenHocSinh.length;
let i=0, j=0;

// ban đầu, 0 bọt được sx , có N bọt đang trồi lên 
// kế tiếp là 1 bọt đã thoát, có N-1 bọt đang trồi lên 
// 2 bọt, còn N-2 bọt trang trồi  
for(i=0; i<N-1; i++) {
    for(j=0;j<N-1-i; j++) {
        if (dsTenHocSinh[j] > dsTenHocSinh[j+1])
        {
            let ds = dsTenHocSinh[j];
            dsTenHocSinh[j] = dsTenHocSinh[j+1];
            dsTenHocSinh[j+1] = ds;
        }
    }
}

console.log(dsTenHocSinh);