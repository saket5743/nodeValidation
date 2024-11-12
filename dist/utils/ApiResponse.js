"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    constructor(statusCode, data, message, type) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.type = type;
    }
}
exports.default = ApiResponse;
