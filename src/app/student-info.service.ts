import { Injectable } from '@angular/core';
import { StudentInfo } from './studentInfo.model';

@Injectable()
export class StudentInfoService {
  students : StudentInfo[];
    constructor(){
        console.log('Constructor is working')
        this.students = [ 
            new StudentInfo('Hamza Ahmed', 'h.hamza011@gmail.com', 19),
            new StudentInfo('Adeel Rajput', 'adeel123@hotmail.com', 24),
            new StudentInfo('Wasif Khanzada', 'wasif99@yahoo.com', 19)
        ] 

        console.log('this.students : ', this.students);
    }

    getRegistered(e, fullName:any, email:any, age:number){
        e.preventDefault();
        if(fullName === "" || email === "" || age <=0 || age >= 50){
            alert("Basic Information Is Required \n Please Share Your Details");
        }
        if(fullName != "" && email != "" && age >=0 && age <= 50){
            this.students.push( new StudentInfo(fullName, email, age));
            console.log('this : ',this);
            // this.reset(fullName,email,age)
            console.log(fullName)
        }
    }
    // reset(fullName,email,age){
    //     console.log("Fullname in reset : ",fullName);
    //     document.getElementById('name').innerText = "";
    //     document.getElementById('mailAddress').innerText = "";
    //     document.getElementById('age').innerText = "";
    // }

    delete(i){
        this.students.splice(i, 1);
    }

    edit(students,i,fullName,email,age){
        fullName.value = students.fullName;
        email.value = students.email;
        age.value = students.age;
        console.log('Calling update inside edit',this.update)
    }

    update(students, i, fullName, email, age){
        this.students[i].fullName = fullName.value;
        this.students[i].email = email.value;
        this.students[i].age = age.value
    }

}