/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var UserModel = (function () {
    function UserModel(userModel) {
        this._userModel = userModel;
    }
    Object.defineProperty(UserModel.prototype, "email", {
        get: function () {
            return this._userModel.email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "password", {
        get: function () {
            return this._userModel.password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "passwordResetToken", {
        get: function () {
            return this._userModel.passwordResetToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "passwordResetExpires", {
        get: function () {
            return this._userModel.passwordResetExpires;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "gender", {
        get: function () {
            return this._userModel.gender;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "picture", {
        get: function () {
            return this._userModel.picture;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "chapters", {
        get: function () {
            return this._userModel.chapters;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());
Object.seal(UserModel);
module.exports = UserModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbC9Vc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBS0g7SUFJSSxtQkFBWSxTQUFxQjtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBQ0Qsc0JBQUksNEJBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBa0I7YUFBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkJBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBQ0wsZ0JBQUM7QUFBRCxDQWxDQSxBQWtDQyxJQUFBO0FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2QixpQkFBVSxTQUFTLENBQUMiLCJmaWxlIjoiYXBwL21vZGVsL1VzZXJNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBNb2l6LkthY2h3YWxhIG9uIDE1LTA2LTIwMTYuXG4gKi9cblxuaW1wb3J0IElVc2VyTW9kZWwgPSByZXF1aXJlKCcuL2ludGVyZmFjZXMvVXNlck1vZGVsJyk7XG5pbXBvcnQgQ2hhcHRlck1vZGVsID0gcmVxdWlyZShcIi4vQ2hhcHRlck1vZGVsXCIpO1xuXG5jbGFzcyBVc2VyTW9kZWwge1xuXG4gICAgcHJpdmF0ZSBfdXNlck1vZGVsOiBJVXNlck1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IodXNlck1vZGVsOiBJVXNlck1vZGVsKSB7XG4gICAgICAgIHRoaXMuX3VzZXJNb2RlbCA9IHVzZXJNb2RlbDtcbiAgICB9XG4gICAgZ2V0IGVtYWlsICgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1vZGVsLmVtYWlsO1xuICAgIH1cblxuICAgIGdldCBwYXNzd29yZCAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNb2RlbC5wYXNzd29yZDtcbiAgICB9XG5cbiAgICBnZXQgcGFzc3dvcmRSZXNldFRva2VuICgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1vZGVsLnBhc3N3b3JkUmVzZXRUb2tlbjtcbiAgICB9XG5cbiAgICBnZXQgcGFzc3dvcmRSZXNldEV4cGlyZXMgKCk6IERhdGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1vZGVsLnBhc3N3b3JkUmVzZXRFeHBpcmVzO1xuICAgIH1cblxuICAgIGdldCBnZW5kZXIgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTW9kZWwuZ2VuZGVyO1xuICAgIH1cblxuICAgIGdldCBwaWN0dXJlICgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1vZGVsLnBpY3R1cmU7XG4gICAgfVxuXG4gICAgZ2V0IGNoYXB0ZXJzICgpOiBbQ2hhcHRlck1vZGVsXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTW9kZWwuY2hhcHRlcnM7XG4gICAgfVxufVxuT2JqZWN0LnNlYWwoVXNlck1vZGVsKTtcbmV4cG9ydCA9ICBVc2VyTW9kZWw7XG5cbiJdfQ==
