/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var HeroBusiness = require("./../app/business/HeroBusiness");
var HeroController = (function () {
    function HeroController() {
    }
    HeroController.prototype.create = function (req, res) {
        try {
            var hero = req.body;
            var heroBusiness = new HeroBusiness();
            heroBusiness.create(hero, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    HeroController.prototype.update = function (req, res) {
        try {
            console.log('ziv is the king!');
            var hero = req.body;
            var _id = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.update(_id, hero, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    HeroController.prototype.delete = function (req, res) {
        try {
            var _id = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.delete(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send({ "success": "success" });
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    HeroController.prototype.retrieve = function (req, res) {
        try {
            var heroBusiness = new HeroBusiness();
            heroBusiness.retrieve(function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    HeroController.prototype.findById = function (req, res) {
        try {
            var _id = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.findById(_id, function (error, result) {
                if (error)
                    res.send({ "error": "error" });
                else
                    res.send(result);
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    };
    return HeroController;
}());
module.exports = HeroController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL0hlcm9Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUdILDZEQUFnRTtBQUloRTtJQUFBO0lBa0ZBLENBQUM7SUFoRkcsK0JBQU0sR0FBTixVQUFPLEdBQW9CLEVBQUUsR0FBcUI7UUFDOUMsSUFBSSxDQUFDO1lBRUQsSUFBSSxJQUFJLEdBQTJCLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDNUMsSUFBSSxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUN0QyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNO2dCQUNwQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUM7b0JBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJO29CQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQyxDQUFDO1FBRWpELENBQUM7SUFDTCxDQUFDO0lBQ0QsK0JBQU0sR0FBTixVQUFPLEdBQW9CLEVBQUUsR0FBcUI7UUFDOUMsSUFBSSxDQUFDO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2hDLElBQUksSUFBSSxHQUEyQixHQUFHLENBQUMsSUFBSSxDQUFDO1lBQzVDLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2pDLElBQUksWUFBWSxHQUFHLElBQUksWUFBWSxF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QUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUMsQ0FBQyxDQUFDO1FBRWpELENBQUM7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQWxGQSxBQWtGQyxJQUFBO0FBQ0QsaUJBQVMsY0FBYyxDQUFDIiwiZmlsZSI6ImNvbnRyb2xsZXJzL0hlcm9Db250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IE1vaXouS2FjaHdhbGEgb24gMTUtMDYtMjAxNi5cbiAqL1xuXG5pbXBvcnQgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuaW1wb3J0IEhlcm9CdXNpbmVzcyA9IHJlcXVpcmUoXCIuLy4uL2FwcC9idXNpbmVzcy9IZXJvQnVzaW5lc3NcIik7XG5pbXBvcnQgSUJhc2VDb250cm9sbGVyID0gcmVxdWlyZShcIi4vQmFzZUNvbnRyb2xsZXJcIik7XG5pbXBvcnQgSUhlcm9Nb2RlbCA9IHJlcXVpcmUoXCIuLy4uL2FwcC9tb2RlbC9pbnRlcmZhY2VzL0hlcm9Nb2RlbFwiKTtcblxuY2xhc3MgSGVyb0NvbnRyb2xsZXIgaW1wbGVtZW50cyBJQmFzZUNvbnRyb2xsZXIgPEhlcm9CdXNpbmVzcz4ge1xuXG4gICAgY3JlYXRlKHJlcTogZXhwcmVzcy5SZXF1ZXN0LCByZXM6IGV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgdmFyIGhlcm86IElIZXJvTW9kZWwgPSA8SUhlcm9Nb2RlbD5yZXEuYm9keTtcbiAgICAgICAgICAgIHZhciBoZXJvQnVzaW5lc3MgPSBuZXcgSGVyb0J1c2luZXNzKCk7XG4gICAgICAgICAgICBoZXJvQnVzaW5lc3MuY3JlYXRlKGhlcm8sIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVzLnNlbmQoe1wic3VjY2Vzc1wiOiBcInN1Y2Nlc3NcIn0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3IgaW4geW91ciByZXF1ZXN0XCJ9KTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygneml2IGlzIHRoZSBraW5nIScpO1xuICAgICAgICAgICAgdmFyIGhlcm86IElIZXJvTW9kZWwgPSA8SUhlcm9Nb2RlbD5yZXEuYm9keTtcbiAgICAgICAgICAgIHZhciBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xuICAgICAgICAgICAgdmFyIGhlcm9CdXNpbmVzcyA9IG5ldyBIZXJvQnVzaW5lc3MoKTtcbiAgICAgICAgICAgIGhlcm9CdXNpbmVzcy51cGRhdGUoX2lkLCBoZXJvLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycm9yKSByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yXCJ9KTtcbiAgICAgICAgICAgICAgICBlbHNlIHJlcy5zZW5kKHtcInN1Y2Nlc3NcIjogXCJzdWNjZXNzXCJ9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBkZWxldGUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICB2YXIgX2lkOiBzdHJpbmcgPSByZXEucGFyYW1zLl9pZDtcbiAgICAgICAgICAgIHZhciBoZXJvQnVzaW5lc3MgPSBuZXcgSGVyb0J1c2luZXNzKCk7XG4gICAgICAgICAgICBoZXJvQnVzaW5lc3MuZGVsZXRlKF9pZCwgKGVycm9yLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvclwifSk7XG4gICAgICAgICAgICAgICAgZWxzZSByZXMuc2VuZCh7XCJzdWNjZXNzXCI6IFwic3VjY2Vzc1wifSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgcmVzLnNlbmQoe1wiZXJyb3JcIjogXCJlcnJvciBpbiB5b3VyIHJlcXVlc3RcIn0pO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0cmlldmUocmVxOiBleHByZXNzLlJlcXVlc3QsIHJlczogZXhwcmVzcy5SZXNwb25zZSk6IHZvaWQge1xuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICB2YXIgaGVyb0J1c2luZXNzID0gbmV3IEhlcm9CdXNpbmVzcygpO1xuICAgICAgICAgICAgaGVyb0J1c2luZXNzLnJldHJpZXZlKChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVzLnNlbmQocmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBmaW5kQnlJZChyZXE6IGV4cHJlc3MuUmVxdWVzdCwgcmVzOiBleHByZXNzLlJlc3BvbnNlKTogdm9pZCB7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIHZhciBfaWQ6IHN0cmluZyA9IHJlcS5wYXJhbXMuX2lkO1xuICAgICAgICAgICAgdmFyIGhlcm9CdXNpbmVzcyA9IG5ldyBIZXJvQnVzaW5lc3MoKTtcbiAgICAgICAgICAgIGhlcm9CdXNpbmVzcy5maW5kQnlJZChfaWQsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZXJyb3IpIHJlcy5zZW5kKHtcImVycm9yXCI6IFwiZXJyb3JcIn0pO1xuICAgICAgICAgICAgICAgIGVsc2UgcmVzLnNlbmQocmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXMuc2VuZCh7XCJlcnJvclwiOiBcImVycm9yIGluIHlvdXIgcmVxdWVzdFwifSk7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCA9IEhlcm9Db250cm9sbGVyOyJdfQ==
