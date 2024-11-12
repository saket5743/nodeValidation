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
const express_1 = __importDefault(require("express"));
const connection_db_1 = __importDefault(require("./db/connection.db"));
const routes_1 = __importDefault(require("./router/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/users', routes_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connection_db_1.default)();
    console.log('DB is connected');
    app.listen(8050, () => {
        console.log('The server is running on port 8050...');
    });
});
start();
