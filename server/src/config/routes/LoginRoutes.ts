/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import UserController = require("./../../controllers/UserController");

var router = express.Router();
class HeroRoutes {
    private _userController: UserController;

    constructor () {
        this._userController = new UserController();
    }
    get routes () {
        var controller = this._userController;

        router.post("/auth/login", controller.login);
        return router;
    }


}

Object.seal(HeroRoutes);
export = HeroRoutes;