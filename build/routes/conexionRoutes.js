"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const conexionController_1 = __importDefault(require("../controllers/conexionController"));
class ConexionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', conexionController_1.default.index);
    }
}
const conexionRoutes = new ConexionRoutes();
exports.default = conexionRoutes.router;
