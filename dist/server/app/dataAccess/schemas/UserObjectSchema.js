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
                email: { type: String,
                    unique: true,
                    required: true
                },
                password: {
                    type: String,
                    required: true
                },
                name: String,
                passwordResetToken: String,
                passwordResetExpires: Date,
                gender: String,
                location: String,
                picture: String,
                chapters: { type: Array, "default": [] }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvVXNlck9iamVjdFNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSCwwQ0FBNkM7QUFJN0MsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0FBQzNDLElBQUksa0JBQWtCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZEO0lBQUE7SUF1QkEsQ0FBQztJQXJCRyxzQkFBVyxvQkFBTTthQUFqQjtZQUNJLElBQUksTUFBTSxHQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNO29CQUNqQixNQUFNLEVBQUUsSUFBSTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0QsUUFBUSxFQUFFO29CQUNOLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO2lCQUNqQjtnQkFDRCxJQUFJLEVBQUcsTUFBTTtnQkFDYixrQkFBa0IsRUFBRSxNQUFNO2dCQUMxQixvQkFBb0IsRUFBRSxJQUFJO2dCQUMxQixNQUFNLEVBQUcsTUFBTTtnQkFDZixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEtBQUssRUFBRyxTQUFTLEVBQUcsRUFBRSxFQUFFO2FBQy9DLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFDTCxpQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUFDRCxJQUFJLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsRSxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiYXBwL2RhdGFBY2Nlc3Mvc2NoZW1hcy9Vc2VyT2JqZWN0U2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IE1vaXouS2FjaHdhbGEgb24gMTUtMDYtMjAxNi5cbiAqL1xuXG5pbXBvcnQgRGF0YUFjY2VzcyA9IHJlcXVpcmUoJy4uL0RhdGFBY2Nlc3MnKTtcbmltcG9ydCBJVXNlck1vZGVsID0gcmVxdWlyZShcIi4vLi4vLi4vbW9kZWwvaW50ZXJmYWNlcy9Vc2VyTW9kZWxcIik7XG5pbXBvcnQgQ2hhcHRlck1vZGVsID0gcmVxdWlyZShcIi4uLy4uL21vZGVsL0NoYXB0ZXJNb2RlbFwiKTtcblxudmFyIG1vbmdvb3NlID0gRGF0YUFjY2Vzcy5tb25nb29zZUluc3RhbmNlO1xudmFyIG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xuXG5jbGFzcyBVc2VyU2NoZW1hIHtcblxuICAgIHN0YXRpYyBnZXQgc2NoZW1hICgpIHtcbiAgICAgICAgdmFyIHNjaGVtYSA9ICBtb25nb29zZS5TY2hlbWEoe1xuICAgICAgICAgICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZSA6IFN0cmluZyxcbiAgICAgICAgICAgIHBhc3N3b3JkUmVzZXRUb2tlbjogU3RyaW5nLFxuICAgICAgICAgICAgcGFzc3dvcmRSZXNldEV4cGlyZXM6IERhdGUsXG4gICAgICAgICAgICBnZW5kZXIgOiBTdHJpbmcsXG4gICAgICAgICAgICBsb2NhdGlvbjogU3RyaW5nLFxuICAgICAgICAgICAgcGljdHVyZTogU3RyaW5nLFxuICAgICAgICAgICAgY2hhcHRlcnMgOiB7IHR5cGUgOiBBcnJheSAsIFwiZGVmYXVsdFwiIDogW10gfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH1cbn1cbnZhciBzY2hlbWEgPSBtb25nb29zZUNvbm5lY3Rpb24ubW9kZWwoXCJVc2Vyc1wiLCBVc2VyU2NoZW1hLnNjaGVtYSk7XG5leHBvcnQgPSBzY2hlbWE7Il19
