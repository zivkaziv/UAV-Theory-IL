/**
 * Created by Ziv Kalderon on 15-06-2016.
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbC9Vc2VyTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBS0g7SUFJSSxtQkFBWSxTQUFxQjtRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0JBQUksNEJBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLCtCQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBa0I7YUFBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztRQUM5QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBRUQsc0JBQUksNkJBQU07YUFBVjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDhCQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBQ0wsZ0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2QixpQkFBVSxTQUFTLENBQUMiLCJmaWxlIjoiYXBwL21vZGVsL1VzZXJNb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBaaXYgS2FsZGVyb24gb24gMTUtMDYtMjAxNi5cbiAqL1xuXG5pbXBvcnQgSVVzZXJNb2RlbCA9IHJlcXVpcmUoJy4vaW50ZXJmYWNlcy9Vc2VyTW9kZWwnKTtcbmltcG9ydCBDaGFwdGVyTW9kZWwgPSByZXF1aXJlKFwiLi9DaGFwdGVyTW9kZWxcIik7XG5cbmNsYXNzIFVzZXJNb2RlbCB7XG5cbiAgICBwcml2YXRlIF91c2VyTW9kZWw6IElVc2VyTW9kZWw7XG5cbiAgICBjb25zdHJ1Y3Rvcih1c2VyTW9kZWw6IElVc2VyTW9kZWwpIHtcbiAgICAgICAgdGhpcy5fdXNlck1vZGVsID0gdXNlck1vZGVsO1xuICAgIH1cblxuICAgIGdldCBlbWFpbCAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNb2RlbC5lbWFpbDtcbiAgICB9XG5cbiAgICBnZXQgcGFzc3dvcmQgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VyTW9kZWwucGFzc3dvcmQ7XG4gICAgfVxuXG4gICAgZ2V0IHBhc3N3b3JkUmVzZXRUb2tlbiAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNb2RlbC5wYXNzd29yZFJlc2V0VG9rZW47XG4gICAgfVxuXG4gICAgZ2V0IHBhc3N3b3JkUmVzZXRFeHBpcmVzICgpOiBEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNb2RlbC5wYXNzd29yZFJlc2V0RXhwaXJlcztcbiAgICB9XG5cbiAgICBnZXQgZ2VuZGVyICgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1vZGVsLmdlbmRlcjtcbiAgICB9XG5cbiAgICBnZXQgcGljdHVyZSAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJNb2RlbC5waWN0dXJlO1xuICAgIH1cblxuICAgIGdldCBjaGFwdGVycyAoKTogW0NoYXB0ZXJNb2RlbF0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlck1vZGVsLmNoYXB0ZXJzO1xuICAgIH1cbn1cbk9iamVjdC5zZWFsKFVzZXJNb2RlbCk7XG5leHBvcnQgPSAgVXNlck1vZGVsO1xuXG4iXX0=
