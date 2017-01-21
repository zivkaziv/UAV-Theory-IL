"use strict";
/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
var express = require("express");
var HeroRoutes = require("../routes/HeroRoutes");
var LoginRoutes = require("../routes/LoginRoutes");
var app = express();
var Routes = (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            app.use("/", new HeroRoutes().routes);
            app.use("/", new LoginRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
module.exports = Routes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGlDQUFvQztBQUdwQyxpREFBb0Q7QUFDcEQsbURBQXNEO0FBQ3RELElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCO0lBQUE7SUFRQSxDQUFDO0lBTkcsc0JBQUksMEJBQU07YUFBVjtZQUVJLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFDTCxhQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFDRCxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlcy9Sb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxuICovXG5pbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbmltcG9ydCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5pbXBvcnQgSGVyb1JvdXRlcyA9IHJlcXVpcmUoJy4uL3JvdXRlcy9IZXJvUm91dGVzJyk7XG5pbXBvcnQgTG9naW5Sb3V0ZXMgPSByZXF1aXJlKCcuLi9yb3V0ZXMvTG9naW5Sb3V0ZXMnKTtcbnZhciBhcHAgPSBleHByZXNzKCk7XG5cbmNsYXNzIFJvdXRlcyB7XG5cbiAgICBnZXQgcm91dGVzKCkge1xuXG4gICAgICAgIGFwcC51c2UoXCIvXCIsIG5ldyBIZXJvUm91dGVzKCkucm91dGVzKTtcbiAgICAgICAgYXBwLnVzZShcIi9cIiwgbmV3IExvZ2luUm91dGVzKCkucm91dGVzKTtcbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICB9XG59XG5leHBvcnQgPSBSb3V0ZXM7Il19
