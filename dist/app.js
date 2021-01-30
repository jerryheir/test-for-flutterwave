"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const validation_routes_1 = __importDefault(require("./routes/validation.routes"));
const app = express_1.default();
app.use(express_1.default.json());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan_1.default('dev'));
}
app.use(`/`, validation_routes_1.default);
exports.default = app;
