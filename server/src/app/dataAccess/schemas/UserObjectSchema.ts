/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IUserModel = require("./../../model/interfaces/UserModel");
import ChapterModel = require("../../model/ChapterModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            email: { type: String,
                unique: true,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            name : String,
            passwordResetToken: String,
            passwordResetExpires: Date,
            gender : String,
            location: String,
            picture: String,
            chapters : { type : Array , "default" : [] }
        });

        return schema;
    }
}
var schema = mongooseConnection.model("Users", UserSchema.schema);
export = schema;