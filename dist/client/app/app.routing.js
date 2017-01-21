"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var dashboardstudent_component_1 = require("./components/dashboardstudent/dashboardstudent.component");
var heroes_component_1 = require("./components/heroes/heroes.component");
var hero_detail_component_1 = require("./components/heroDetail/hero-detail.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboardstudent_component_1.DashboardStudentComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard-studens',
        component: dashboard_component_1.DashboardComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQXVEO0FBRXZELGtGQUFrRjtBQUNsRix1R0FBdUc7QUFDdkcseUVBQTRFO0FBQzVFLHVGQUFxRjtBQUVyRixJQUFNLFNBQVMsR0FBVztJQUN4QjtRQUNFLElBQUksRUFBRSxFQUFFO1FBQ1IsVUFBVSxFQUFFLFlBQVk7UUFDeEIsU0FBUyxFQUFFLE1BQU07S0FDbEI7SUFDRDtRQUNFLElBQUksRUFBRSxXQUFXO1FBQ2pCLFNBQVMsRUFBRSxzREFBeUI7S0FDckM7SUFDRDtRQUNFLElBQUksRUFBRSxZQUFZO1FBQ2xCLFNBQVMsRUFBRSwyQ0FBbUI7S0FDL0I7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLGtDQUFlO0tBQzNCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLFNBQVMsRUFBRSx3Q0FBa0I7S0FDOUI7Q0FDRixDQUFDO0FBRVcsUUFBQSxPQUFPLEdBQUcscUJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2FwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSAgIGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRTdHVkZW50Q29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkc3R1ZGVudC9kYXNoYm9hcmRzdHVkZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXJvZXNDb21wb25lbnQgfSAgICAgIGZyb20gJy4vY29tcG9uZW50cy9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXJvRGV0YWlsQ29tcG9uZW50IH0gIGZyb20gJy4vY29tcG9uZW50cy9oZXJvRGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudCc7XG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgcmVkaXJlY3RUbzogJy9kYXNoYm9hcmQnLFxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnZGFzaGJvYXJkJyxcbiAgICBjb21wb25lbnQ6IERhc2hib2FyZFN0dWRlbnRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdkZXRhaWwvOmlkJyxcbiAgICBjb21wb25lbnQ6IEhlcm9EZXRhaWxDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdoZXJvZXMnLFxuICAgIGNvbXBvbmVudDogSGVyb2VzQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnZGFzaGJvYXJkLXN0dWRlbnMnLFxuICAgIGNvbXBvbmVudDogRGFzaGJvYXJkQ29tcG9uZW50XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzLCB7IHVzZUhhc2g6IHRydWUgfSk7XG4iXX0=
