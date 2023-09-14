"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.responseHandler = void 0;
function responseHandler(status, message, data) {
    return {
        status: status,
        message: message,
        data: data,
    };
}
exports.responseHandler = responseHandler;
function errorHandler(status, message) {
    return {
        status: status,
        message: message,
    };
}
exports.errorHandler = errorHandler;
