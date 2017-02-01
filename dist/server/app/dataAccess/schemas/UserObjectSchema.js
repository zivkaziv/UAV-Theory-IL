/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var DataAccess = require("../DataAccess");
var bcrypt = require("bcrypt-nodejs");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var UserSchema = (function () {
    function UserSchema() {
    }
    Object.defineProperty(UserSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                email: {
                    type: String,
                    unique: true,
                    required: true
                },
                password: {
                    type: String,
                    required: true
                },
                firstName: String,
                lastName: String,
                id: String,
                company: String,
                phoneNumber: String,
                passwordResetToken: String,
                passwordResetExpires: Date,
                licenseValidUntil: Date,
                purchaseDate: Date,
                paypalToken: String,
                birthday: Date,
                isDeleted: Boolean,
                lastLogin: Date,
                gender: String,
                location: String,
                picture: String,
                chapters: { type: Array, "default": [] }
            });
            schema.pre('save', function (next) {
                var user = this;
                if (!user.isModified('password')) {
                    return next();
                }
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(user.password, salt, null, function (err, hash) {
                        user.password = hash;
                        next();
                    });
                });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvVXNlck9iamVjdFNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSCwwQ0FBNkM7QUFHN0Msc0NBQXlDO0FBRXpDLElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMzQyxJQUFJLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2RDtJQUFBO0lBK0NBLENBQUM7SUE3Q0csc0JBQVcsb0JBQU07YUFBakI7WUFDSSxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN6QixLQUFLLEVBQUU7b0JBQ0gsSUFBSSxFQUFFLE1BQU07b0JBQ1osTUFBTSxFQUFFLElBQUk7b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2dCQUNELFFBQVEsRUFBRTtvQkFDTixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0QsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixFQUFFLEVBQUUsTUFBTTtnQkFDVixPQUFPLEVBQUUsTUFBTTtnQkFDZixXQUFXLEVBQUUsTUFBTTtnQkFDbkIsa0JBQWtCLEVBQUUsTUFBTTtnQkFDMUIsb0JBQW9CLEVBQUUsSUFBSTtnQkFDMUIsaUJBQWlCLEVBQUUsSUFBSTtnQkFDdkIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFdBQVcsRUFBRSxNQUFNO2dCQUNuQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxTQUFTLEVBQUUsT0FBTztnQkFDbEIsU0FBUyxFQUFDLElBQUk7Z0JBQ2QsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLE9BQU8sRUFBRSxNQUFNO2dCQUNmLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBQzthQUN6QyxDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLElBQUk7Z0JBQzdCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDaEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0IsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNsQixDQUFDO2dCQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7b0JBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7d0JBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUNyQixJQUFJLEVBQUUsQ0FBQztvQkFDWCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUNMLGlCQUFDO0FBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtBQUVELElBQUksTUFBTSxHQUFHLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xFLGlCQUFTLE1BQU0sQ0FBQyIsImZpbGUiOiJhcHAvZGF0YUFjY2Vzcy9zY2hlbWFzL1VzZXJPYmplY3RTY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgTW9pei5LYWNod2FsYSBvbiAxNS0wNi0yMDE2LlxuICovXG5cbmltcG9ydCBEYXRhQWNjZXNzID0gcmVxdWlyZSgnLi4vRGF0YUFjY2VzcycpO1xuaW1wb3J0IElVc2VyTW9kZWwgPSByZXF1aXJlKFwiLi8uLi8uLi9tb2RlbC9pbnRlcmZhY2VzL1VzZXJNb2RlbFwiKTtcbmltcG9ydCBDaGFwdGVyTW9kZWwgPSByZXF1aXJlKFwiLi4vLi4vbW9kZWwvQ2hhcHRlck1vZGVsXCIpO1xuaW1wb3J0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdC1ub2RlanMnKTtcblxudmFyIG1vbmdvb3NlID0gRGF0YUFjY2Vzcy5tb25nb29zZUluc3RhbmNlO1xudmFyIG1vbmdvb3NlQ29ubmVjdGlvbiA9IERhdGFBY2Nlc3MubW9uZ29vc2VDb25uZWN0aW9uO1xuXG5jbGFzcyBVc2VyU2NoZW1hIHtcblxuICAgIHN0YXRpYyBnZXQgc2NoZW1hKCkge1xuICAgICAgICB2YXIgc2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hKHtcbiAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlyc3ROYW1lOiBTdHJpbmcsXG4gICAgICAgICAgICBsYXN0TmFtZTogU3RyaW5nLFxuICAgICAgICAgICAgaWQ6IFN0cmluZyxcbiAgICAgICAgICAgIGNvbXBhbnk6IFN0cmluZyxcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBTdHJpbmcsXG4gICAgICAgICAgICBwYXNzd29yZFJlc2V0VG9rZW46IFN0cmluZyxcbiAgICAgICAgICAgIHBhc3N3b3JkUmVzZXRFeHBpcmVzOiBEYXRlLFxuICAgICAgICAgICAgbGljZW5zZVZhbGlkVW50aWw6IERhdGUsXG4gICAgICAgICAgICBwdXJjaGFzZURhdGU6IERhdGUsXG4gICAgICAgICAgICBwYXlwYWxUb2tlbjogU3RyaW5nLFxuICAgICAgICAgICAgYmlydGhkYXk6IERhdGUsXG4gICAgICAgICAgICBpc0RlbGV0ZWQ6IEJvb2xlYW4sXG4gICAgICAgICAgICBsYXN0TG9naW46RGF0ZSxcbiAgICAgICAgICAgIGdlbmRlcjogU3RyaW5nLFxuICAgICAgICAgICAgbG9jYXRpb246IFN0cmluZyxcbiAgICAgICAgICAgIHBpY3R1cmU6IFN0cmluZyxcbiAgICAgICAgICAgIGNoYXB0ZXJzOiB7dHlwZTogQXJyYXksIFwiZGVmYXVsdFwiOiBbXX1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NoZW1hLnByZSgnc2F2ZScsIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgICAgICB2YXIgdXNlciA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXVzZXIuaXNNb2RpZmllZCgncGFzc3dvcmQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiY3J5cHQuZ2VuU2FsdCgxMCwgZnVuY3Rpb24gKGVyciwgc2FsdCkge1xuICAgICAgICAgICAgICAgIGJjcnlwdC5oYXNoKHVzZXIucGFzc3dvcmQsIHNhbHQsIG51bGwsIGZ1bmN0aW9uIChlcnIsIGhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlci5wYXNzd29yZCA9IGhhc2g7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH1cbn1cblxudmFyIHNjaGVtYSA9IG1vbmdvb3NlQ29ubmVjdGlvbi5tb2RlbChcIlVzZXJzXCIsIFVzZXJTY2hlbWEuc2NoZW1hKTtcbmV4cG9ydCA9IHNjaGVtYTtcblxuIl19
