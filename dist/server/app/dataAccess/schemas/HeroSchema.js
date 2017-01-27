/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var DataAccess = require("../DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var HeroSchema = (function () {
    function HeroSchema() {
    }
    Object.defineProperty(HeroSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                name: {
                    type: String,
                    required: true
                },
                power: {
                    type: String,
                    required: true
                },
                amountPeopleSaved: {
                    type: Number,
                    required: true
                }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return HeroSchema;
}());
var schema = mongooseConnection.model("Heroes", HeroSchema.schema);
module.exports = schema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvSGVyb1NjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSCwwQ0FBNkM7QUFHN0MsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0FBQzNDLElBQUksa0JBQWtCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZEO0lBQUE7SUFvQkEsQ0FBQztJQWxCRyxzQkFBVyxvQkFBTTthQUFqQjtZQUNJLElBQUksTUFBTSxHQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksRUFBRztvQkFDSCxJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0QsS0FBSyxFQUFFO29CQUNILElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO2lCQUNqQjtnQkFDRCxpQkFBaUIsRUFBRTtvQkFDZixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDakI7YUFDSixDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0wsaUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBQ0QsSUFBSSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkUsaUJBQVMsTUFBTSxDQUFDIiwiZmlsZSI6ImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvSGVyb1NjaGVtYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBNb2l6LkthY2h3YWxhIG9uIDE1LTA2LTIwMTYuXG4gKi9cblxuaW1wb3J0IERhdGFBY2Nlc3MgPSByZXF1aXJlKCcuLi9EYXRhQWNjZXNzJyk7XG5pbXBvcnQgSUhlcm9Nb2RlbCA9IHJlcXVpcmUoXCIuLy4uLy4uL21vZGVsL2ludGVyZmFjZXMvSGVyb01vZGVsXCIpO1xuXG52YXIgbW9uZ29vc2UgPSBEYXRhQWNjZXNzLm1vbmdvb3NlSW5zdGFuY2U7XG52YXIgbW9uZ29vc2VDb25uZWN0aW9uID0gRGF0YUFjY2Vzcy5tb25nb29zZUNvbm5lY3Rpb247XG5cbmNsYXNzIEhlcm9TY2hlbWEge1xuXG4gICAgc3RhdGljIGdldCBzY2hlbWEgKCkge1xuICAgICAgICB2YXIgc2NoZW1hID0gIG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgICAgICAgICBuYW1lIDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvd2VyOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW1vdW50UGVvcGxlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG59XG52YXIgc2NoZW1hID0gbW9uZ29vc2VDb25uZWN0aW9uLm1vZGVsKFwiSGVyb2VzXCIsIEhlcm9TY2hlbWEuc2NoZW1hKTtcbmV4cG9ydCA9IHNjaGVtYTsiXX0=
