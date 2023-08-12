/*
Cho 1 danh sách các Tên Học Sinh trong lớp,
-->  sắp xếp theo tứ tự DTB Cao -- Thap
*/
// npm install -g ts-node typescript  
class HocSinh { 
    HoHS: string;
    TenHS: string;
    DiemTB: number;
    NgaySinh: number;
    ThangSinh: number;
    NamSinh: number;
    
    constructor(ho : string, ten : string, dtb : number) {
        this.TenHS = ten;
        this.HoHS = ho;
        this.DiemTB = dtb;
        this.NgaySinh = -1;
        this.ThangSinh = -1;
        this.NamSinh = -1;
    }

    capNhatDTB(dtb : number) : void {
        this.DiemTB = dtb;
    }

    capNhatNgaySinh(n: number, t:number, nam: number) : void {
        this.NgaySinh = n;
        this.ThangSinh = t;
        this.NamSinh = nam;
    }
}

let dsHocSinhdaydu : HocSinh[] = [
    new HocSinh("Nguyễn Văn", "An", 7),
    new HocSinh("Phạm Văn" , "Minh", 8),
    new HocSinh("Doãn Chí" , "Bình", 5),
    new HocSinh("Đổng Thành" , "Chính", 7.7),
    new HocSinh("Bùi Xuân" , "Kình", 6.5),
    new HocSinh("Dương Chí" , "Văn", 9),
    new HocSinh("Hậu Thái" , "Hòa", 8.2)
]

let N = dsHocSinhdaydu.length;
let i=0, j=0;

for(i=0; i<N-1; i++) {
    for(j=0;j<N-1-i; j++) {
        if (dsHocSinhdaydu[j].DiemTB < dsHocSinhdaydu[j+1].DiemTB)
        {
            let ds = dsHocSinhdaydu[j];
            dsHocSinhdaydu[j] = dsHocSinhdaydu[j+1];
            dsHocSinhdaydu[j+1] = ds;
        }
    }
}

console.log(dsHocSinhdaydu);

// RUN:  npx   ts-node   230813_01.ts