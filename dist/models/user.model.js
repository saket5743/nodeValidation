"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^[a-zA-Z\s-]{2,30}$/.test(value),
            message: 'Name must be 2 to 30 character long'
        }
    },
    username: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => /^[a-zA-Z0-9]{3,15}$/.test(value),
        message: 'Username must be 3 to 15 characters long'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: (value) => /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(value),
        messagee: 'Email must be required'
    },
    phone: {
        type: Number,
        required: true,
        validate: (value) => /^\+?[0-9]{10,12}$/.test(value.toString()),
        message: "Phone number is must be in 10 to 12 digit and start with +"
    }
});
const User = mongoose_1.default.model('User', userSchema);
exports.default = User;
