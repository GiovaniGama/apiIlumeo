"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const error_1 = require("./app/middlewares/error");
const routes_1 = require("./app/routes/routes");
const PORT = 3000;
const HOST = '0.0.0.0';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.objectRouter);
app.use(error_1.errorMiddleware);
app.listen(PORT, HOST);
