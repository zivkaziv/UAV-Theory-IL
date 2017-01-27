/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserSchema = require("../dataAccess/schemas/Userschema");
var RepositoryBase = require("./BaseRepository");
var UserRepository = (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        return _super.call(this, UserSchema) || this;
    }
    return UserRepository;
}(RepositoryBase));
Object.seal(UserRepository);
module.exports = UserRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L1VzZXJSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7O0FBSUgsNkRBQWdFO0FBQ2hFLGlEQUFvRDtBQUVwRDtJQUE4QixrQ0FBMEI7SUFDcEQ7ZUFDSSxrQkFBTSxVQUFVLENBQUM7SUFDckIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSjZCLGNBQWMsR0FJM0M7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzVCLGlCQUFTLGNBQWMsQ0FBQyIsImZpbGUiOiJhcHAvcmVwb3NpdG9yeS9Vc2VyUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBNb2l6LkthY2h3YWxhIG9uIDE1LTA2LTIwMTYuXG4gKi9cblxuaW1wb3J0IFVzZXJNb2RlbCA9IHJlcXVpcmUoXCIuLy4uL21vZGVsL1VzZXJNb2RlbFwiKTtcbmltcG9ydCBJVXNlck1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWwvaW50ZXJmYWNlcy9Vc2VyTW9kZWxcIik7XG5pbXBvcnQgVXNlclNjaGVtYSA9IHJlcXVpcmUoXCIuLi9kYXRhQWNjZXNzL3NjaGVtYXMvVXNlcnNjaGVtYVwiKTtcbmltcG9ydCBSZXBvc2l0b3J5QmFzZSA9IHJlcXVpcmUoXCIuL0Jhc2VSZXBvc2l0b3J5XCIpO1xuXG5jbGFzcyBVc2VyUmVwb3NpdG9yeSAgZXh0ZW5kcyBSZXBvc2l0b3J5QmFzZTxJVXNlck1vZGVsPiB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihVc2VyU2NoZW1hKTtcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKFVzZXJSZXBvc2l0b3J5KTtcbmV4cG9ydCA9IFVzZXJSZXBvc2l0b3J5OyJdfQ==
