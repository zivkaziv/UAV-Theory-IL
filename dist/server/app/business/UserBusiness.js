/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var UserRepository = require("./../repository/UserRepository");
var bcrypt = require("bcrypt-nodejs");
var UserBusiness = (function () {
    function UserBusiness() {
        this.comparePassword = function (password, user, callback) {
            bcrypt.compare(password, user.password, function (err, isMatch) {
                callback(err, isMatch);
            });
        };
        this._userRepository = new UserRepository();
    }
    UserBusiness.prototype.create = function (item, callback) {
        this._userRepository.create(item, callback);
    };
    UserBusiness.prototype.retrieve = function (callback) {
        this._userRepository.retrieve(callback);
    };
    UserBusiness.prototype.update = function (_id, item, callback) {
        var _this = this;
        this._userRepository.findById(_id, function (err, res) {
            if (err) {
                callback(err, res);
            }
            else {
                _this._userRepository.update(res._id, item, callback);
            }
        });
    };
    UserBusiness.prototype.delete = function (_id, callback) {
        this._userRepository.delete(_id, callback);
    };
    UserBusiness.prototype.findById = function (_id, callback) {
        this._userRepository.findById(_id, callback);
    };
    UserBusiness.prototype.login = function (user, callback) {
        var _this = this;
        console.log(user);
        this._userRepository.findByCondition({ email: user.email }, function (error, foundUser) {
            if (error) {
                console.log(error);
            }
            else {
                console.log(foundUser);
                if (foundUser) {
                    _this.comparePassword(user.password, foundUser, function (err, isMatch) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            if (isMatch) {
                                callback(null, foundUser);
                            }
                            else {
                                callback(null, {});
                            }
                        }
                    });
                }
                else {
                    callback(null, {});
                }
            }
        });
    };
    return UserBusiness;
}());
Object.seal(UserBusiness);
module.exports = UserBusiness;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy9Vc2VyQnVzaW5lc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUgsK0RBQWtFO0FBSWxFLHNDQUF5QztBQUd6QztJQUdJO1FBZ0NBLG9CQUFlLEdBQUcsVUFBVSxRQUFlLEVBQUUsSUFBZSxFQUFFLFFBQStDO1lBQzdHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxHQUFHLEVBQUUsT0FBTztnQkFDMUQsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQW5DTSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELDZCQUFNLEdBQU4sVUFBUSxJQUFnQixFQUFFLFFBQTJDO1FBQ2pFLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFVLFFBQTJDO1FBQ2pELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQVEsR0FBVyxFQUFFLElBQWdCLEVBQUUsUUFBMkM7UUFBbEYsaUJBVUM7UUFSRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUN4QyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNOLFFBQVEsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDdkIsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pELENBQUM7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQVEsR0FBVyxFQUFFLFFBQTBDO1FBQzNELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRyxRQUFRLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsK0JBQVEsR0FBUixVQUFVLEdBQVcsRUFBRSxRQUFrRDtRQUNyRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQVFELDRCQUFLLEdBQUwsVUFBTSxJQUFRLEVBQUUsUUFBMkM7UUFBM0QsaUJBd0JDO1FBdkJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQUMsS0FBSyxFQUFFLFNBQVM7WUFDeEUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNaLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsT0FBTzt3QkFDeEQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0QkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixDQUFDO3dCQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNKLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQ1YsUUFBUSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzs0QkFDOUIsQ0FBQzs0QkFBQSxJQUFJLENBQUEsQ0FBQztnQ0FDRixRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzRCQUN2QixDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFBQSxJQUFJLENBQUEsQ0FBQztvQkFDRixRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FsRUEsQUFrRUMsSUFBQTtBQUdELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUIsaUJBQVMsWUFBWSxDQUFDIiwiZmlsZSI6ImFwcC9idXNpbmVzcy9Vc2VyQnVzaW5lc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxuICovXG5cbmltcG9ydCBVc2VyUmVwb3NpdG9yeSA9IHJlcXVpcmUoXCIuLy4uL3JlcG9zaXRvcnkvVXNlclJlcG9zaXRvcnlcIik7XG5pbXBvcnQgSVVzZXJCdXNpbmVzcyA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZXMvVXNlckJ1c2luZXNzXCIpO1xuaW1wb3J0IElVc2VyTW9kZWwgPSByZXF1aXJlKFwiLi8uLi9tb2RlbC9pbnRlcmZhY2VzL1VzZXJNb2RlbFwiKTtcbmltcG9ydCBVc2VyTW9kZWwgPSByZXF1aXJlKFwiLi8uLi9tb2RlbC9Vc2VyTW9kZWxcIik7XG5pbXBvcnQgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0LW5vZGVqcycpO1xuXG5cbmNsYXNzIFVzZXJCdXNpbmVzcyBpbXBsZW1lbnRzIElVc2VyQnVzaW5lc3Mge1xuICAgIHByaXZhdGUgX3VzZXJSZXBvc2l0b3J5OiBVc2VyUmVwb3NpdG9yeTtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5fdXNlclJlcG9zaXRvcnkgPSBuZXcgVXNlclJlcG9zaXRvcnkoKTtcbiAgICB9XG5cbiAgICBjcmVhdGUgKGl0ZW06IElVc2VyTW9kZWwsIGNhbGxiYWNrOiAoZXJyb3I6IGFueSwgcmVzdWx0OiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5fdXNlclJlcG9zaXRvcnkuY3JlYXRlKGl0ZW0sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXRyaWV2ZSAoY2FsbGJhY2s6IChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLl91c2VyUmVwb3NpdG9yeS5yZXRyaWV2ZShjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgdXBkYXRlIChfaWQ6IHN0cmluZywgaXRlbTogSVVzZXJNb2RlbCwgY2FsbGJhY2s6IChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4gdm9pZCkge1xuXG4gICAgICAgIHRoaXMuX3VzZXJSZXBvc2l0b3J5LmZpbmRCeUlkKF9pZCwgKGVyciwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXMpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJSZXBvc2l0b3J5LnVwZGF0ZShyZXMuX2lkLCBpdGVtLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlIChfaWQ6IHN0cmluZywgY2FsbGJhY2s6KGVycm9yOiBhbnksIHJlc3VsdDogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX3VzZXJSZXBvc2l0b3J5LmRlbGV0ZShfaWQgLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZmluZEJ5SWQgKF9pZDogc3RyaW5nLCBjYWxsYmFjazogKGVycm9yOiBhbnksIHJlc3VsdDogSVVzZXJNb2RlbCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLl91c2VyUmVwb3NpdG9yeS5maW5kQnlJZChfaWQsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBjb21wYXJlUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQ6c3RyaW5nLCB1c2VyOklVc2VyTW9kZWwsIGNhbGxiYWNrOihlcnJvcjogYW55LCBpc01hdGNoOiBib29sZWFuKSA9PiB2b2lkKSB7XG4gICAgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQsIGZ1bmN0aW9uIChlcnIsIGlzTWF0Y2gpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyLCBpc01hdGNoKTtcbiAgICB9KTtcbn07XG5cbiAgICBsb2dpbih1c2VyOmFueSwgY2FsbGJhY2s6IChlcnJvcjogYW55LCByZXN1bHQ6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgdGhpcy5fdXNlclJlcG9zaXRvcnkuZmluZEJ5Q29uZGl0aW9uKHtlbWFpbDogdXNlci5lbWFpbCB9LCAoZXJyb3IsIGZvdW5kVXNlcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3VuZFVzZXIpO1xuICAgICAgICAgICAgICAgIGlmIChmb3VuZFVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wYXJlUGFzc3dvcmQodXNlci5wYXNzd29yZCwgZm91bmRVc2VyLCAoZXJyLCBpc01hdGNoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgZm91bmRVc2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwge30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHt9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5PYmplY3Quc2VhbChVc2VyQnVzaW5lc3MpO1xuZXhwb3J0ID0gVXNlckJ1c2luZXNzOyJdfQ==
