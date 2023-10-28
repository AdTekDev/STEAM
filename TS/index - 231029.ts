// CLASS cho 1 danh sach Quyển sách
// có Tiêu đề, có năm xuất bản

class Book {
    title : string;
    publishYear : number;
    rePrint : number;
    publishName : string;
    numPage : number;
    bookType : string;

    public constructor(title: string, publishyear: number,
        reprint:number, publishname : string, 
        numpage : number, booktype: string
        ) {
        this.title = title;
        this.publishYear = publishyear;
        this.bookType = booktype;
        this.numPage = numpage;
        this.publishName = publishname;
        this.rePrint = reprint;
    }
}
//------------------
let dsbook : Book[] = [];
dsbook.push( new Book("Dem den", 1978, 0, "SuThat", 200, "Truyen") );
dsbook.push( new Book("Thất dạ", 1968, 0, "Alpha", 400, "Truyen") );
dsbook.push( new Book("Trăng máu", 2003, 0, "TRe", 300, "Truyen") );
console.log(dsbook);

// bấm 3 phím cùng lúc Ctrl + Alt + N
