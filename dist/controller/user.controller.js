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
const user_model_1 = __importDefault(require("../models/user.model"));
const asyncWrapper_1 = __importDefault(require("../utils/asyncWrapper"));
const constants_1 = require("../utils/constants");
const handleGetAllUser = (0, asyncWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_model_1.default.find({});
    res.status(constants_1.CODE_200).send({ SUCCESS: constants_1.SUCCESS, users });
}));
const handleCreateUser = (0, asyncWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.create(req.body);
    yield user.save();
    res.status(constants_1.CODE_201).json({ CREATED: constants_1.CREATED, user });
}));
const handleSingleUserById = (0, asyncWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: userId } = req.params;
    const user = yield user_model_1.default.findById({ _id: userId });
    if (!user) {
        res.status(constants_1.CODE_404).json(constants_1.USER_NOT_FOUND);
    }
    res.send(user);
}));
const handleUpdateUserById = (0, asyncWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: userId } = req.params;
    const user = yield user_model_1.default.findByIdAndUpdate({ _id: userId }, req.body, { runValidators: true, overwrite: true });
    if (!user) {
        res.status(constants_1.CODE_404).json(constants_1.USER_NOT_FOUND);
    }
    res.send(user);
}));
const handleDeleteUserById = (0, asyncWrapper_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: userId } = req.params;
    const user = yield user_model_1.default.findOneAndDelete({ _id: userId }, req.body);
    if (!user) {
        res.status(constants_1.CODE_404).json(constants_1.USER_NOT_FOUND);
    }
    res.send(user);
}));
exports.default = { handleGetAllUser, handleCreateUser };
