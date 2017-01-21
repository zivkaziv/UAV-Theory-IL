"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var heroes_component_1 = require("./components/heroes/heroes.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var dashboardstudent_component_1 = require("./components/dashboardstudent/dashboardstudent.component");
var hero_detail_component_1 = require("./components/heroDetail/hero-detail.component");
var hero_service_1 = require("./services/hero.service");
var material_1 = require("@angular/material");
var ng2_expansion_panels_1 = require("ng2-expansion-panels");
var AppModule = (function () {
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
            dashboardstudent_component_1.DashboardStudentComponent
        ],
        providers: [
            hero_service_1.HeroService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBOEM7QUFDOUMsOERBQTBEO0FBQzFELHdDQUFnRDtBQUNoRCxzQ0FBK0M7QUFFL0MsaURBQWdEO0FBQ2hELDZDQUE4QztBQUU5Qyx5RUFBNEU7QUFDNUUsa0ZBQWtGO0FBQ2xGLHVHQUF1RztBQUN2Ryx1RkFBcUY7QUFFckYsd0RBQXVEO0FBQ3ZELDhDQUFtRDtBQUNuRCw2REFBNkQ7QUF1QjdELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsU0FBUztJQXJCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsZ0NBQWE7WUFDYixpQkFBVTtZQUNWLG1CQUFXO1lBQ1gscUJBQU87WUFDUCx5QkFBYyxDQUFDLE9BQU8sRUFBRTtZQUN4Qiw0Q0FBcUI7U0FDcEI7UUFDSCxZQUFZLEVBQUU7WUFDWiw0QkFBWTtZQUNaLGtDQUFlO1lBQ2Ysd0NBQWtCO1lBQ2xCLDJDQUFtQjtZQUNuQixzREFBeUI7U0FDMUI7UUFDRCxTQUFTLEVBQUU7WUFDVCwwQkFBVztTQUNaO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSAgICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgcm91dGluZyB9ICAgICAgIGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuXG5pbXBvcnQgeyBIZXJvZXNDb21wb25lbnQgfSAgICAgIGZyb20gJy4vY29tcG9uZW50cy9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSAgIGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXNoYm9hcmRTdHVkZW50Q29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkc3R1ZGVudC9kYXNoYm9hcmRzdHVkZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZXJvRGV0YWlsQ29tcG9uZW50IH0gIGZyb20gJy4vY29tcG9uZW50cy9oZXJvRGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEhlcm9TZXJ2aWNlIH0gIGZyb20gJy4vc2VydmljZXMvaGVyby5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRXhwYW5zaW9uUGFuZWxzTW9kdWxlIH0gZnJvbSAnbmcyLWV4cGFuc2lvbi1wYW5lbHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIHJvdXRpbmcsXG4gICAgTWF0ZXJpYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEV4cGFuc2lvblBhbmVsc01vZHVsZVxuICAgIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBIZXJvZXNDb21wb25lbnQsXG4gICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIEhlcm9EZXRhaWxDb21wb25lbnQsXG4gICAgRGFzaGJvYXJkU3R1ZGVudENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBIZXJvU2VydmljZVxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
