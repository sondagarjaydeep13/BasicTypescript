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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signinService = void 0;
const apiResponse_1 = require("../dbHelper/apiResponse");
const userModel_1 = __importDefault(require("../model/userModel"));
const signinService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield new userModel_1.default(Object.assign({}, data)).save();
        if (newUser) {
            return (0, apiResponse_1.responseHandler)(200, 'New User Signin Success !!', newUser);
        }
    }
    catch (error) {
        console.log('Error,userService:signinService', error);
    }
});
exports.signinService = signinService;
