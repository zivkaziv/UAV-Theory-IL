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
var http_1 = require("@angular/http");
var headers_1 = require("../common/headers");
var angular2_jwt_js_1 = require("angular2-jwt/angular2-jwt.js");
var AuthenticationService = (function () {
    function AuthenticationService(router, http) {
        this.router = router;
        this.http = http;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("id_token");
        localStorage.removeItem("username");
        this.router.navigate(['login']);
    };
    AuthenticationService.prototype.login = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        this.http.post('/api/auth/login', body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            if (JSON.stringify(response.json().success) === "true") {
                localStorage.setItem('id_token', JSON.stringify(response.json().token));
                localStorage.setItem('username', JSON.stringify(response.json().username));
                _this.router.navigate(['dashboard']);
            }
            else {
                window.alert(JSON.stringify(response.json().message));
            }
        }, function (error) {
            alert(error.text());
            console.log(error.text());
            return false;
        });
        return true;
    };
    AuthenticationService.prototype.isLoggedin = function () {
        if (angular2_jwt_js_1.tokenNotExpired()) {
            return true;
        }
        else {
            return false;
        }
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hdXRoZW50aWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsMENBQXlDO0FBQ3pDLHNDQUFxQztBQUNyQyw2Q0FBbUQ7QUFFbkQsZ0VBQStEO0FBRy9ELElBQWEscUJBQXFCO0lBRTlCLCtCQUNZLE1BQWMsRUFDYixJQUFVO1FBRFgsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNiLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRTVCLHNDQUFNLEdBQU47UUFDSSxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxxQ0FBSyxHQUFMLFVBQU0sSUFBVTtRQUFoQixpQkFtQkM7UUFsQkcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsd0JBQWMsRUFBRSxDQUFDO2FBQy9ELFNBQVMsQ0FDVixVQUFBLFFBQVE7WUFDSixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyRCxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNILE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMxRCxDQUFDO1FBQ0wsQ0FBQyxFQUNELFVBQUEsS0FBSztZQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwwQ0FBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLENBQUMsaUNBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFBQSxJQUFJLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFDTCw0QkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q1kscUJBQXFCO0lBRGpDLGlCQUFVLEVBQUU7cUNBSVcsZUFBTTtRQUNQLFdBQUk7R0FKZCxxQkFBcUIsQ0F3Q2pDO0FBeENZLHNEQUFxQiIsImZpbGUiOiJhcHAvc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBjb250ZW50SGVhZGVycyB9IGZyb20gJy4uL2NvbW1vbi9oZWFkZXJzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9tb2RlbHMvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyB0b2tlbk5vdEV4cGlyZWQgfSBmcm9tICdhbmd1bGFyMi1qd3QvYW5ndWxhcjItand0LmpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgIHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiaWRfdG9rZW5cIik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcm5hbWVcIik7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnbG9naW4nXSk7XG4gICAgfVxuXG4gICAgbG9naW4odXNlcjogVXNlcikge1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgICAgICB0aGlzLmh0dHAucG9zdCgnL2FwaS9hdXRoL2xvZ2luJywgYm9keSwgeyBoZWFkZXJzOiBjb250ZW50SGVhZGVycyB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuanNvbigpLnN1Y2Nlc3MpID09PSBcInRydWVcIikge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRfdG9rZW4nLCBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5qc29uKCkudG9rZW4pKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJuYW1lJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UuanNvbigpLnVzZXJuYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZGFzaGJvYXJkJ10pO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmpzb24oKS5tZXNzYWdlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvci50ZXh0KCkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlzTG9nZ2VkaW4oKSB7XG4gICAgICAgIGlmICh0b2tlbk5vdEV4cGlyZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
