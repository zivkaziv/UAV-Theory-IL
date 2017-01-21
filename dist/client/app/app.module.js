System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "angular2-jwt/angular2-jwt.js", "./app.component", "./app.routing", "./components/heroes/heroes.component", "./components/dashboard/dashboard.component", "./components/dashboardstudent/dashboardstudent.component", "./components/heroDetail/hero-detail.component", "./components/login/login.component", "./services/hero.service", "./services/authentication.service", "@angular/material", "ng2-expansion-panels", "./common/auth.guard"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, http_1, angular2_jwt_js_1, app_component_1, app_routing_1, heroes_component_1, dashboard_component_1, dashboardstudent_component_1, hero_detail_component_1, login_component_1, hero_service_1, authentication_service_1, material_1, ng2_expansion_panels_1, auth_guard_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_jwt_js_1_1) {
                angular2_jwt_js_1 = angular2_jwt_js_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (dashboardstudent_component_1_1) {
                dashboardstudent_component_1 = dashboardstudent_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (material_1_1) {
                material_1 = material_1_1;
            },
            function (ng2_expansion_panels_1_1) {
                ng2_expansion_panels_1 = ng2_expansion_panels_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        http_1.HttpModule,
                        forms_1.FormsModule,
                        app_routing_1.routing,
                        material_1.MaterialModule.forRoot(),
                        ng2_expansion_panels_1.ExpansionPanelsModule
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        heroes_component_1.HeroesComponent,
                        dashboard_component_1.DashboardComponent,
                        hero_detail_component_1.HeroDetailComponent,
                        dashboardstudent_component_1.DashboardStudentComponent,
                        login_component_1.LoginComponent
                    ],
                    providers: [
                        hero_service_1.HeroService,
                        authentication_service_1.AuthenticationService,
                        angular2_jwt_js_1.AUTH_PROVIDERS,
                        auth_guard_1.AuthGuard
                    ],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});

//# sourceMappingURL=app.module.js.map
