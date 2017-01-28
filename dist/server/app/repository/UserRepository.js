/**
 * Created by Ziv Kalderon on 15-06-2016.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserSchema = require("../dataAccess/schemas/UserObjectSchema");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L1VzZXJSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7O0FBSUgsbUVBQXNFO0FBQ3RFLGlEQUFvRDtBQUVwRDtJQUE4QixrQ0FBMEI7SUFDcEQ7ZUFDSSxrQkFBTSxVQUFVLENBQUM7SUFDckIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSjZCLGNBQWMsR0FJM0M7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzVCLGlCQUFTLGNBQWMsQ0FBQyIsImZpbGUiOiJhcHAvcmVwb3NpdG9yeS9Vc2VyUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBaaXYgS2FsZGVyb24gb24gMTUtMDYtMjAxNi5cbiAqL1xuXG5pbXBvcnQgVXNlck1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWwvVXNlck1vZGVsXCIpO1xuaW1wb3J0IElVc2VyTW9kZWwgPSByZXF1aXJlKFwiLi8uLi9tb2RlbC9pbnRlcmZhY2VzL1VzZXJNb2RlbFwiKTtcbmltcG9ydCBVc2VyU2NoZW1hID0gcmVxdWlyZShcIi4uL2RhdGFBY2Nlc3Mvc2NoZW1hcy9Vc2VyT2JqZWN0U2NoZW1hXCIpO1xuaW1wb3J0IFJlcG9zaXRvcnlCYXNlID0gcmVxdWlyZShcIi4vQmFzZVJlcG9zaXRvcnlcIik7XG5cbmNsYXNzIFVzZXJSZXBvc2l0b3J5ICBleHRlbmRzIFJlcG9zaXRvcnlCYXNlPElVc2VyTW9kZWw+IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKFVzZXJTY2hlbWEpO1xuICAgIH1cbn1cblxuT2JqZWN0LnNlYWwoVXNlclJlcG9zaXRvcnkpO1xuZXhwb3J0ID0gVXNlclJlcG9zaXRvcnk7Il19
