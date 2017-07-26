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
    getRegistered(e, fullName:string, email:string, age:number){
        e.preventDefault();
        this.students.push( new StudentInfo(fullName, email, age));  
    }
    delete(i){
        console.log('i',i);
        this.students.splice(i, 1);
    }
}
