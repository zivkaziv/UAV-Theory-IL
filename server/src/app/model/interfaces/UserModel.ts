/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");
import ChapterModel = require("../ChapterModel");

interface UserModel extends mongoose.Document {
    email: string;
    password: string;
    name: string;
    passwordResetToken: string;
    passwordResetExpires: Date;
    gender: string;
    location: string;
    picture: string;
    chapters: [ChapterModel];
}

export = UserModel ;
