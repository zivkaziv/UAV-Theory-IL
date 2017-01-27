System.register(["@angular/router", "./components/dashboard/dashboard.component", "./components/dashboardstudent/dashboardstudent.component", "./components/heroes/heroes.component", "./components/heroDetail/hero-detail.component", "./common/auth.guard", "./components/login/login.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, dashboard_component_1, dashboardstudent_component_1, heroes_component_1, hero_detail_component_1, auth_guard_1, login_component_1, appRoutes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (dashboardstudent_component_1_1) {
                dashboardstudent_component_1 = dashboardstudent_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
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
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    };
});

//# sourceMappingURL=app.routing.js.map
