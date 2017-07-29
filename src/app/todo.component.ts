 import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

import { StudentInfoService } from './student-info.service'

@Component({
    selector : 'todo-cmp',

    template : `
     <div class="parent">
        <form class='registrationForm'>
            <input type="text" #fullName placeholder="Full Name" name="fullName" id="name"/>
            <input type="mail" #email placeholder="Email Address" name= "email" id="mailAddress"/>
            <input type="text" #age placeholder="age" name= "age" id="a"/>
            <button id="submit" class="submitButton" (click) = 'this.studentInfoService.getRegistered($event, fullName.value, email.value, age.value)'>Register Now</button>  
        </form>
    </div>
    
    <table>
        <tr>
            <th> Name </th>
            <th> Email Address </th>
            <th> Age </th>
        </tr>
        <tr *ngFor = "let students of student; let i = index">
            <td class="info" [hidden]="!students.hide">{{students.fullName}}</td>
            <td class="info" [hidden]="!students.hide">{{students.email}}</td>
            <td class="info" [hidden]="!students.hide">{{students.age}}</td>
            <td>
                <button class="buttonsWithRow toggle" (click)= "students.toggleButton()">Show/Hide</button>                
                <button class="buttonsWithRow" (click)="this.studentInfoService.delete(i)">Delete</button>
                <button class="buttonsWithRow" (click)="this.studentInfoService.edit(students,i,fullName,email,age)">Edit</button>
                <button class="buttonsWithRow" (click)="this.studentInfoService.update(students,i,fullName,email,age)">Update</button>                
            </td>
        </tr>
        
    </table>
    `,

    styles : [`
        div.parent{ width : 100%; text-align : center }
        .registrationForm{ border : 2px solid #C3002F; margin : 0 auto; width : 50%; padding : 20px;}
        input{ padding : 10px; margin : 10px; border : none; border-bottom : 1px solid #C3002F; text-align : center; outline : none; background : transparent }
        button.submitButton{ display : block; padding : 10px; margin : 0 auto; cursor : pointer; background : #C3002F; color : #fff; border-radius : 5px; border : none; margin-top : 10px; outline : none; font-family : 'Franklin Gothic Medium'; font-size : 16px; }
    
        table{ border : 1px solid #C3002F; margin : 0 auto; margin-top : 20px; width : 70%}
        th{ border : 1px solid#C3002F}
        .info{ border-left : 1px solid #C3002F; border-bottom : 1px solid #C3002F; border-right : 1px solid #C3002F; padding : 15px; text-align : center }
        .buttonsWithRow{ width : 20% ;cursor : pointer; padding : 8px; background : #C3002F; color : #fff; border-radius : 5px; border : none; outline : none; }
        .buttonsWithRow:hover{ color : #C3002F; background : #fff; border : 1px solid #C3002F; transition : .4s; }
        button.toggle{ margin-left : 20px; }
    `

    ]
})

export class StudentTable{
    student = [];
    constructor(private studentInfoService: StudentInfoService){
    this.student = this.studentInfoService.students;
    console.log('this.student', this.student)  
    }
} 