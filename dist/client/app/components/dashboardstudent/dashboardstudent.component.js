/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
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
var router_1 = require("@angular/router");
var hero_service_1 = require("../../services/hero.service");
var DashboardStudentComponent = (function () {
    function DashboardStudentComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .then(function (heroes) { return _this.heroes = heroes; });
    };
    DashboardStudentComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero._id];
        this.router.navigate(link);
    };
    return DashboardStudentComponent;
}());
DashboardStudentComponent = __decorate([
    core_1.Component({
        selector: 'student-dashboard',
        templateUrl: './app/components/dashboardstudent/dashboardstudent.component.html',
        styleUrls: ['./app/components/dashboardstudent/dashboardstudent.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hero_service_1.HeroService])
], DashboardStudentComponent);
exports.DashboardStudentComponent = DashboardStudentComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Rhc2hib2FyZHN0dWRlbnQvZGFzaGJvYXJkc3R1ZGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7O0FBRUgsc0NBQWdEO0FBQ2hELDBDQUF5QztBQUd6Qyw0REFBd0Q7QUFReEQsSUFBYSx5QkFBeUI7SUFHbEMsbUNBQ1ksTUFBYyxFQUNkLFdBQXdCO1FBRHhCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpwQyxXQUFNLEdBQVcsRUFBRSxDQUFDO0lBS3BCLENBQUM7SUFFRCw0Q0FBUSxHQUFSO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTthQUN2QixJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCw4Q0FBVSxHQUFWLFVBQVcsSUFBVTtRQUNqQixJQUFJLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSx5QkFBeUI7SUFOckMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsV0FBVyxFQUFFLG1FQUFtRTtRQUNoRixTQUFTLEVBQUUsQ0FBQyxrRUFBa0UsQ0FBQztLQUNsRixDQUFDO3FDQU1zQixlQUFNO1FBQ0QsMEJBQVc7R0FMM0IseUJBQXlCLENBaUJyQztBQWpCWSw4REFBeUIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkc3R1ZGVudC9kYXNoYm9hcmRzdHVkZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBNb2l6LkthY2h3YWxhIG9uIDAyLTA2LTIwMTYuXG4gKi9cblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge0hlcm99IGZyb20gXCIuLi8uLi9tb2RlbHMvaGVyb1wiO1xuaW1wb3J0IHtIZXJvU2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2hlcm8uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0dWRlbnQtZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkc3R1ZGVudC9kYXNoYm9hcmRzdHVkZW50LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmRzdHVkZW50L2Rhc2hib2FyZHN0dWRlbnQuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkU3R1ZGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaGVyb2VzOiBIZXJvW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGhlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmhlcm9TZXJ2aWNlLmdldEhlcm9lcygpXG4gICAgICAgICAgICAudGhlbihoZXJvZXMgPT4gdGhpcy5oZXJvZXMgPSBoZXJvZXMpO1xuICAgIH1cblxuICAgIGdvdG9EZXRhaWwoaGVybzogSGVybykge1xuICAgICAgICBsZXQgbGluayA9IFsnL2RldGFpbCcsIGhlcm8uX2lkXTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7XG4gICAgfVxufSJdfQ==
