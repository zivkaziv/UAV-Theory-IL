import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.component.css']
})

export class AppComponent {
    title = 'Tour of Heroes';

    meterologyChepters = [
        {
            name:'פרק 1',
            refLink:'/heroes'
        },
          {
            name:'פרק 2',
            refLink:'/dashboard'
        },
          {
            name:'פרק 3',
            refLink:'/heroes'
        }
    ];
}