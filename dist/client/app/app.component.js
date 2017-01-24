"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var authentication_service_1 = require("./services/authentication.service");
var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
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
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFDeEMsNEVBQTBFO0FBUTFFLElBQWEsWUFBWTtJQUNyQixzQkFDWSxXQUFrQztRQUFsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBdUI7UUFHOUMsVUFBSyxHQUFHLGdCQUFnQixDQUFDO1FBRXpCLHVCQUFrQixHQUFHO1lBQ2pCO2dCQUNJLElBQUksRUFBQyxPQUFPO2dCQUNaLE9BQU8sRUFBQyxTQUFTO2FBQ3BCO1lBQ0M7Z0JBQ0UsSUFBSSxFQUFDLE9BQU87Z0JBQ1osT0FBTyxFQUFDLFlBQVk7YUFDdkI7WUFDQztnQkFDRSxJQUFJLEVBQUMsT0FBTztnQkFDWixPQUFPLEVBQUMsU0FBUzthQUNwQjtTQUNKLENBQUM7SUFqQkcsQ0FBQztJQWtCVixtQkFBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksWUFBWTtJQU54QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFDLFFBQVE7UUFDakIsV0FBVyxFQUFFLGdCQUFnQjtRQUM3QixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztLQUN6QyxDQUFDO3FDQUkyQiw4Q0FBcUI7R0FGckMsWUFBWSxDQXFCeEI7QUFyQlksb0NBQVkiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjonbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2FwcC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hcHAvYXBwLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xuICAgICAgICAgfVxuXG4gICAgdGl0bGUgPSAnVG91ciBvZiBIZXJvZXMnO1xuXG4gICAgbWV0ZXJvbG9neUNoZXB0ZXJzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOifXpNeo16cgMScsXG4gICAgICAgICAgICByZWZMaW5rOicvaGVyb2VzJ1xuICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6J9ek16jXpyAyJyxcbiAgICAgICAgICAgIHJlZkxpbms6Jy9kYXNoYm9hcmQnXG4gICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTon16TXqNenIDMnLFxuICAgICAgICAgICAgcmVmTGluazonL2hlcm9lcydcbiAgICAgICAgfVxuICAgIF07XG59Il19
