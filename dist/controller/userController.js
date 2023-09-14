"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = void 0;
const userService_1 = require("../service/userService");
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let response = yield (0, userService_1.signinService)(req.body);
        if (response) {
            res.status(response.status).send(response);
        }
    }
    catch (error) {
        console.log('Error,userController:signin', error);
    }
});
exports.signin = signin;
