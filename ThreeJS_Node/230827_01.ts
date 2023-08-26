/*
Cho  HINH TRON
-->  tinh CHU VI, DIEN TICH
*/
// npm install -g ts-node typescript   '@types/node'
// run:  npx ts-node  ...

class  HinhTron {
    bankinh: number;

    constructor (r: number) {
        this.bankinh = r;
    }
    chobietChuVi() : number {
        let chuvi = this.bankinh * 2 * Math.PI;
        return chuvi;
    }
    chobietDienTich() : number {
        return Math.PI * this.bankinh**2;
    }
    
}
///////////////////
let  hcn01 = new HinhTron(10);

console.log( hcn01, 
    hcn01.chobietChuVi() , 
    hcn01.chobietDienTich() 
);


