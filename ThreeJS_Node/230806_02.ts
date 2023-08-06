/*
Cho 1 danh sách các Tên Học Sinh trong lớp,
-->  sắp xếp theo tứ tự ABC
*/
class HocSinh { 
    HoHS: string;
    TenHS: string;
    
    constructor(ho : string, ten : string) {
        this.TenHS = ten;
        this.HoHS = ho;
    }
}

let dsHocSinhdaydu : HocSinh[] = [
    new HocSinh("Nguyễn Văn", "An"),
    new HocSinh("Phạm Văn" , "Minh"),
    new HocSinh("Doãn Chí" , "Bình"),
    new HocSinh("Đổng Thành" , "Chính"),
    new HocSinh("Bùi Xuân" , "Kình"),
    new HocSinh("Dương Chí" , "Văn"),
    new HocSinh("Hậu Thái" , "Hòa")
]

let N = dsHocSinhdaydu.length;
let i=0, j=0;

for(i=0; i<N-1; i++) {
    for(j=0;j<N-1-i; j++) {
        if (dsHocSinhdaydu[j].TenHS > dsHocSinhdaydu[j+1].TenHS)
        {
            let ds = dsHocSinhdaydu[j];
            dsHocSinhdaydu[j] = dsHocSinhdaydu[j+1];
            dsHocSinhdaydu[j+1] = ds;
        }
    }
}

console.log(dsHocSinhdaydu);
