"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const URL = "mongodb+srv://user:root1234@cluster0.oqq1mdt.mongodb.net/validateTheDetails?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = () => {
    return mongoose_1.default.connect(URL);
};
exports.default = connectDB;
