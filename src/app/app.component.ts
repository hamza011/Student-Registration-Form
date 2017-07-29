import { Component } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('imageAnimation', [
        state('void', style({
            // transform: 'translateY(100%)',
            transform: 'scale(0)',
        })),
        // transition(':enter', [
        //   style({ transform: 'translateY(-100%)',}),
        //   animate(1000, style({ transform: 'translateY(0%)',}))
        // ])
        transition(':enter', [
          style({ transform: 'scale(0.5)',}),
          animate(1000, style({ transform: 'scale(1)',}))
        ])
    ]),
    
  ]  
})
export class AppComponent {
  
}
