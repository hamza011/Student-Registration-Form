export class StudentInfo{
    fullName : string;
    email : string;
    age : Number;
    hide : Boolean;
    constructor(fullName:string, email:string, age:Number){
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.hide = true;
    }
    toggleButton(){
        this.hide = !this.hide;
    }
    // reset(){
    //     this.fullName = '';
    //     this.email = '';
    //     this.age = null;
    // }
}