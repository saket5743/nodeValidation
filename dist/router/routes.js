"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { handleGetAllUser, handleCreateUser, handleSingleUserById, handleUpdateUserById, handleDeleteUserById } = require('../controller/user.controller');
const router = express_1.default.Router();
router.route('/').get(handleGetAllUser).post(handleCreateUser);
router.route('/:id').get(handleSingleUserById).put(handleUpdateUserById).delete(handleDeleteUserById);
exports.default = router;
