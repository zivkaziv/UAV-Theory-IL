"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var dashboardstudent_component_1 = require("./components/dashboardstudent/dashboardstudent.component");
var heroes_component_1 = require("./components/heroes/heroes.component");
var hero_detail_component_1 = require("./components/heroDetail/hero-detail.component");
var auth_guard_1 = require("./common/auth.guard");
var login_component_1 = require("./components/login/login.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'dashboard',
        component: dashboardstudent_component_1.DashboardStudentComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'dashboard-studens',
        component: dashboard_component_1.DashboardComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQXVEO0FBRXZELGtGQUFrRjtBQUNsRix1R0FBdUc7QUFDdkcseUVBQTRFO0FBQzVFLHVGQUFxRjtBQUNyRixrREFBZ0Q7QUFDaEQsc0VBQW9FO0FBR3BFLElBQU0sU0FBUyxHQUFXO0lBQ3hCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsWUFBWTtRQUN4QixTQUFTLEVBQUUsTUFBTTtRQUNqQixXQUFXLEVBQUUsQ0FBQyxzQkFBUyxDQUFDO0tBQ3pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsV0FBVztRQUNqQixTQUFTLEVBQUUsc0RBQXlCO1FBQ3BDLFdBQVcsRUFBRSxDQUFDLHNCQUFTLENBQUM7S0FDekI7SUFDRDtRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSwyQ0FBbUI7UUFDOUIsV0FBVyxFQUFFLENBQUMsc0JBQVMsQ0FBQztLQUN6QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFFBQVE7UUFDZCxTQUFTLEVBQUUsa0NBQWU7UUFDMUIsV0FBVyxFQUFFLENBQUMsc0JBQVMsQ0FBQztLQUN6QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixTQUFTLEVBQUUsd0NBQWtCO1FBQzdCLFdBQVcsRUFBRSxDQUFDLHNCQUFTLENBQUM7S0FDekI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLGdDQUFjO0tBQzFCO0NBQ0YsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9hcHAucm91dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkU3R1ZGVudENvbXBvbmVudCB9ICAgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZHN0dWRlbnQvZGFzaGJvYXJkc3R1ZGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVyb2VzQ29tcG9uZW50IH0gICAgICBmcm9tICcuL2NvbXBvbmVudHMvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVyb0RldGFpbENvbXBvbmVudCB9ICBmcm9tICcuL2NvbXBvbmVudHMvaGVyb0RldGFpbC9oZXJvLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9jb21tb24vYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuXG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgcmVkaXJlY3RUbzogJy9kYXNoYm9hcmQnLFxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXVxuICB9LFxuICB7XG4gICAgcGF0aDogJ2Rhc2hib2FyZCcsXG4gICAgY29tcG9uZW50OiBEYXNoYm9hcmRTdHVkZW50Q29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXVxuICB9LFxuICB7XG4gICAgcGF0aDogJ2RldGFpbC86aWQnLFxuICAgIGNvbXBvbmVudDogSGVyb0RldGFpbENvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdoZXJvZXMnLFxuICAgIGNvbXBvbmVudDogSGVyb2VzQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXVxuICB9LFxuICB7XG4gICAgcGF0aDogJ2Rhc2hib2FyZC1zdHVkZW5zJyxcbiAgICBjb21wb25lbnQ6IERhc2hib2FyZENvbXBvbmVudCxcbiAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICdsb2dpbicsXG4gICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcywgeyB1c2VIYXNoOiB0cnVlIH0pO1xuIl19
