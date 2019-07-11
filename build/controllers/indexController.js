"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'la API esta /api/conexion' });
    }
}
exports.indexController = new IndexController();
