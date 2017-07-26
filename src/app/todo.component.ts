import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

import { StudentInfoService } from './student-info.service'

@Component({
    selector : 'todo-cmp',
    template : `
     <div class="parent">
        <form class='registrationForm'>
            <input type="text" #fullName placeholder="Full Name" name="fullName"/>
            <input type="mail" #email placeholder="Email Address" name= "email"/>
            <input type="text" #age placeholder="age" name= "age"/>
            <button class="submitButton" (click) = 'this.studentInfoService.getRegistered($event, fullName.value, email.value, age.value)'>Register Now</button>  
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
                <button (click)= "students.toggleButton()">Toggle</button>                
                <button (click)="this.studentInfoService.delete(i)">Delete</button>
            </td>
        </tr>
        
    </table>

    `,
    styles : [`
        div.parent{ width : 100%; text-align : center }
        .registrationForm{ border : 2px solid #C3002F; margin : 0 auto; width : 50%; padding : 20px;}
        input{ padding : 10px; margin : 10px; border : none; border-bottom : 1px solid #C3002F; text-align : center; outline : none; }
        button.submitButton{ display : block; padding : 10px; margin : 0 auto; cursor : pointer; background : #C3002F; color : #fff; border-radius : 5px; border : none; margin-top : 10px; outline : none; font-family : 'Franklin Gothic Medium'; font-size : 16px; }
    
        table{ border : 1px solid; margin : 0 auto; margin-top : 20px; width : 54%}
        th{ border : 1px solid}
        .info{ border-left : 1px solid; border-bottom : 1px solid; border-right : 1px solid; padding : 15px; text-align : center }
        button{ margin-left : 20px; cursor : pointer }
    `
    ]
})

export class StudentTable{
    student = [];
    constructor(private studentInfoService:StudentInfoService){
    this.student = this.studentInfoService.students;
    console.log('this.student', this.student)  
    }
} 