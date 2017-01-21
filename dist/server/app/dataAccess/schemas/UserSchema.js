/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var DataAccess = require("../DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var UserSchema = (function () {
    function UserSchema() {
    }
    Object.defineProperty(UserSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                username: {
                    type: String,
                    required: true
                },
                password: {
                    type: String,
                    required: true
                }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return UserSchema;
}());
var schema = mongooseConnection.model("Users", UserSchema.schema);
module.exports = schema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvVXNlclNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSCwwQ0FBNkM7QUFHN0MsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0FBQzNDLElBQUksa0JBQWtCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZEO0lBQUE7SUFnQkEsQ0FBQztJQWRHLHNCQUFXLG9CQUFNO2FBQWpCO1lBQ0ksSUFBSSxNQUFNLEdBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsUUFBUSxFQUFHO29CQUNQLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO2lCQUNqQjtnQkFDRCxRQUFRLEVBQUU7b0JBQ04sSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2FBQ0osQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQUNELElBQUksTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBYSxPQUFPLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlFLGlCQUFTLE1BQU0sQ0FBQyIsImZpbGUiOiJhcHAvZGF0YUFjY2Vzcy9zY2hlbWFzL1VzZXJTY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxuICovXG5cbmltcG9ydCBEYXRhQWNjZXNzID0gcmVxdWlyZSgnLi4vRGF0YUFjY2VzcycpO1xuaW1wb3J0IElVc2VyTW9kZWwgPSByZXF1aXJlKFwiLi8uLi8uLi9tb2RlbC9pbnRlcmZhY2VzL1VzZXJNb2RlbFwiKTtcblxudmFyIG1vbmdvb3NlID0gRGF0YUFjY2Vzcy5tb25nb29zZUluc3RhbmNlO1xudmFyIG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xuXG5jbGFzcyBVc2VyU2NoZW1hIHtcblxuICAgIHN0YXRpYyBnZXQgc2NoZW1hICgpIHtcbiAgICAgICAgdmFyIHNjaGVtYSA9ICBtb25nb29zZS5TY2hlbWEoe1xuICAgICAgICAgICAgdXNlcm5hbWUgOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG59XG52YXIgc2NoZW1hID0gbW9uZ29vc2VDb25uZWN0aW9uLm1vZGVsPElVc2VyTW9kZWw+KFwiVXNlcnNcIiwgVXNlclNjaGVtYS5zY2hlbWEpO1xuZXhwb3J0ID0gc2NoZW1hOyJdfQ==
