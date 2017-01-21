/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var express = require("express");
var UserController = require("./../../controllers/UserController");
var router = express.Router();
var HeroRoutes = (function () {
    function HeroRoutes() {
        this._userController = new UserController();
    }
    Object.defineProperty(HeroRoutes.prototype, "routes", {
        get: function () {
            var controller = this._userController;
            router.post("/auth/login", controller.login);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return HeroRoutes;
}());
Object.seal(HeroRoutes);
module.exports = HeroRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvTG9naW5Sb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUgsaUNBQW9DO0FBQ3BDLG1FQUFzRTtBQUV0RSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUI7SUFHSTtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBQ0Qsc0JBQUksOEJBQU07YUFBVjtZQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFFdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFHTCxpQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QixpQkFBUyxVQUFVLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlcy9Mb2dpblJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBNb2l6LkthY2h3YWxhIG9uIDE1LTA2LTIwMTYuXG4gKi9cblxuaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBVc2VyQ29udHJvbGxlciA9IHJlcXVpcmUoXCIuLy4uLy4uL2NvbnRyb2xsZXJzL1VzZXJDb250cm9sbGVyXCIpO1xuXG52YXIgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbmNsYXNzIEhlcm9Sb3V0ZXMge1xuICAgIHByaXZhdGUgX3VzZXJDb250cm9sbGVyOiBVc2VyQ29udHJvbGxlcjtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5fdXNlckNvbnRyb2xsZXIgPSBuZXcgVXNlckNvbnRyb2xsZXIoKTtcbiAgICB9XG4gICAgZ2V0IHJvdXRlcyAoKSB7XG4gICAgICAgIHZhciBjb250cm9sbGVyID0gdGhpcy5fdXNlckNvbnRyb2xsZXI7XG5cbiAgICAgICAgcm91dGVyLnBvc3QoXCIvYXV0aC9sb2dpblwiLCBjb250cm9sbGVyLmxvZ2luKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlcjtcbiAgICB9XG5cblxufVxuXG5PYmplY3Quc2VhbChIZXJvUm91dGVzKTtcbmV4cG9ydCA9IEhlcm9Sb3V0ZXM7Il19
