/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
    username: string;
    password: string;
}

export = UserModel;