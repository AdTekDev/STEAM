
let a = 5;
let b = 4;
let c = 3;
// Xác định Tam giác được tạo bởi 3 cạnh a,b,c là tam giác gì 

if (a == b && a == c) {
    console.log("Tam giác của bạn là Tam Giác Đều");
} else if (a == b || a == c || b == c) {
    console.log("Tam giác của bạn là Tam Giác CÂN ");
} else if ( a*a == b*b + c*c 
    || b*b == a*a + c*c
    || c*c == a*a + b*b) {
        console.log("Tam giác của bạn là Tam Giác VUÔNG ");
}
