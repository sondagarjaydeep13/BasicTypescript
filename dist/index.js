"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRouter_1 = __importDefault(require("./router/userRouter"));
const app = (0, express_1.default)();
const dburl = 'mongodb://127.0.0.1:27017/typescript_node';
app.use(express_1.default.json());
app.use('/api/user', userRouter_1.default);
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
mongoose_1.default.connect(dburl).then(() => {
    console.log('Db connected !');
}).catch(err => {
    console.log('Db connection error', err);
});
