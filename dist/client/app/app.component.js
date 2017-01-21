"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.meterologyChepters = [
            {
                name: 'פרק 1',
                refLink: '/heroes'
            },
            {
                name: 'פרק 2',
                refLink: '/dashboard'
            },
            {
                name: 'פרק 3',
                refLink: '/heroes'
            }
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.html',
        styleUrls: ['./app/app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFReEMsSUFBYSxZQUFZO0lBTnpCO1FBT0ksVUFBSyxHQUFHLGdCQUFnQixDQUFDO1FBRXpCLHVCQUFrQixHQUFHO1lBQ2pCO2dCQUNJLElBQUksRUFBQyxPQUFPO2dCQUNaLE9BQU8sRUFBQyxTQUFTO2FBQ3BCO1lBQ0M7Z0JBQ0UsSUFBSSxFQUFDLE9BQU87Z0JBQ1osT0FBTyxFQUFDLFlBQVk7YUFDdkI7WUFDQztnQkFDRSxJQUFJLEVBQUMsT0FBTztnQkFDWixPQUFPLEVBQUMsU0FBUzthQUNwQjtTQUNKLENBQUM7SUFDTixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLFlBQVk7SUFOeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBQyxRQUFRO1FBQ2pCLFdBQVcsRUFBRSxnQkFBZ0I7UUFDN0IsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDekMsQ0FBQztHQUVXLFlBQVksQ0FpQnhCO0FBakJZLG9DQUFZIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2FwcC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hcHAvYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgdGl0bGUgPSAnVG91ciBvZiBIZXJvZXMnO1xuXG4gICAgbWV0ZXJvbG9neUNoZXB0ZXJzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOifXpNeo16cgMScsXG4gICAgICAgICAgICByZWZMaW5rOicvaGVyb2VzJ1xuICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6J9ek16jXpyAyJyxcbiAgICAgICAgICAgIHJlZkxpbms6Jy9kYXNoYm9hcmQnXG4gICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTon16TXqNenIDMnLFxuICAgICAgICAgICAgcmVmTGluazonL2hlcm9lcydcbiAgICAgICAgfVxuICAgIF07XG59Il19
