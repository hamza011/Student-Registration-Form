import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// // Angular Forms
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http'

// Components
import { AppComponent } from './app.component';
import { StudentTable } from './todo.component';
import { StudentInfoService } from './student-info.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentTable
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule
    // ReactiveFormsModule,
    // HttpModule
  ],
  providers: [StudentInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
