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
var angular2_jwt_js_1 = require("angular2-jwt/angular2-jwt.js");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var heroes_component_1 = require("./components/heroes/heroes.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var dashboardstudent_component_1 = require("./components/dashboardstudent/dashboardstudent.component");
var hero_detail_component_1 = require("./components/heroDetail/hero-detail.component");
var login_component_1 = require("./components/login/login.component");
var hero_service_1 = require("./services/hero.service");
var authentication_service_1 = require("./services/authentication.service");
var material_1 = require("@angular/material");
var ng2_expansion_panels_1 = require("ng2-expansion-panels");
var auth_guard_1 = require("./common/auth.guard");
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
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBOEM7QUFDOUMsOERBQTBEO0FBQzFELHdDQUFnRDtBQUNoRCxzQ0FBK0M7QUFDL0MsZ0VBQThEO0FBRzlELGlEQUFnRDtBQUNoRCw2Q0FBOEM7QUFFOUMseUVBQTRFO0FBQzVFLGtGQUFrRjtBQUNsRix1R0FBdUc7QUFDdkcsdUZBQXFGO0FBQ3JGLHNFQUFxRTtBQUVyRSx3REFBdUQ7QUFDdkQsNEVBQTBFO0FBQzFFLDhDQUFtRDtBQUNuRCw2REFBNkQ7QUFFN0Qsa0RBQWdEO0FBMkJoRCxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBekIsQUFBMEIsSUFBQTtBQUFiLFNBQVM7SUF6QnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLGdDQUFhO1lBQ2IsaUJBQVU7WUFDVixtQkFBVztZQUNYLHFCQUFPO1lBQ1AseUJBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsNENBQXFCO1NBQ3BCO1FBQ0gsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWixrQ0FBZTtZQUNmLHdDQUFrQjtZQUNsQiwyQ0FBbUI7WUFDbkIsc0RBQXlCO1lBQ3pCLGdDQUFjO1NBQ2Y7UUFDRCxTQUFTLEVBQUU7WUFDVCwwQkFBVztZQUNYLDhDQUFxQjtZQUNyQixnQ0FBYztZQUNkLHNCQUFTO1NBQ1Y7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9ICAgICBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFVVEhfUFJPVklERVJTIH0gZnJvbSAnYW5ndWxhcjItand0L2FuZ3VsYXIyLWp3dC5qcyc7XG5cblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyByb3V0aW5nIH0gICAgICAgZnJvbSAnLi9hcHAucm91dGluZyc7XG5cbmltcG9ydCB7IEhlcm9lc0NvbXBvbmVudCB9ICAgICAgZnJvbSAnLi9jb21wb25lbnRzL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50JztcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9ICAgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IERhc2hib2FyZFN0dWRlbnRDb21wb25lbnQgfSAgIGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmRzdHVkZW50L2Rhc2hib2FyZHN0dWRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IEhlcm9EZXRhaWxDb21wb25lbnQgfSAgZnJvbSAnLi9jb21wb25lbnRzL2hlcm9EZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gIGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBIZXJvU2VydmljZSB9ICBmcm9tICcuL3NlcnZpY2VzL2hlcm8uc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBFeHBhbnNpb25QYW5lbHNNb2R1bGUgfSBmcm9tICduZzItZXhwYW5zaW9uLXBhbmVscyc7XG5cbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vY29tbW9uL2F1dGguZ3VhcmQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBIdHRwTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIHJvdXRpbmcsXG4gICAgTWF0ZXJpYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEV4cGFuc2lvblBhbmVsc01vZHVsZVxuICAgIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBIZXJvZXNDb21wb25lbnQsXG4gICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIEhlcm9EZXRhaWxDb21wb25lbnQsXG4gICAgRGFzaGJvYXJkU3R1ZGVudENvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBIZXJvU2VydmljZSxcbiAgICBBdXRoZW50aWNhdGlvblNlcnZpY2UsXG4gICAgQVVUSF9QUk9WSURFUlMsXG4gICAgQXV0aEd1YXJkXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19
