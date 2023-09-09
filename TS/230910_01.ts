// Tạo các Class đại diện cho các cuốn sách và tác giả viết sách
class Author {
    // Properties / Attributes
    name : string;
    email : string;
    gender : string;
    // Constructor
    constructor(name: string, email: string, gender: string) {
        this.email = email;
        this.gender = gender;
        this.name = name;
    }
    // Methods / Behaviour / Actions
    getName() : string {
        return this.name;
    }
    getEmail() : string {
        return this.email;
    }
    setEmail(NewEmail : string) : void {
        this.name = NewEmail;
    }
    getGender() : string {
        return this.gender;
    }
    print() : void {
        console.log("Tui la " + this.name + " co email " + this.email);
    }
}
// RUN // run:  npx ts-node  ...
let au01 = new Author("NNTu", "tu@go.com", "M");
au01.print();