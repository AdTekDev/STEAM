/*
Cho  HINH TRON trong Khong Gian 2 chieu xoy
-->  tinh CHU VI, DIEN TICH
*/
// npm install -g ts-node typescript   '@types/node'
// run:  npx ts-node  ...

class  HinhTron {
    bankinh: number;
    x: number;
    y: number;
    constructor (x:number, y:number, r: number) {
        this.bankinh = r;
        this.x = x;
        this.y = y;
    }
    chobietChuVi() : number {
        let chuvi = this.bankinh * 2 * Math.PI;
        return chuvi;
    }
    chobietDienTich() : number {
        return Math.PI * this.bankinh**2;
    }
    xuatSVG() : string {
        let str =  "";
        str += "<svg  width='" + (Math.abs(this.x) + this.bankinh)
            + "' height='" + (Math.abs(this.y) + this.bankinh) + "'> "
            + " <circle cx='" + this.x 
            + "' cy='" + this.y 
            + "' r='" + this.bankinh
            + "' stroke-width='3'  fill='red' > </svg>";


        return str;
    }
}
///////////////////
let  hcn01 = new HinhTron(100,100,10);

console.log( hcn01, 
    hcn01.chobietChuVi() , 
    hcn01.chobietDienTich() 
);


console.log(hcn01.xuatSVG())

