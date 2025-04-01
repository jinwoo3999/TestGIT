"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// ...existing code...
const app = (0, express_1.default)();
exports.app = app;
const port = process.env.PORT || 3000;
// Middleware
app.use(body_parser_1.default.json());
// ...existing code...
// Only start the server if this file is run directly
let server;
if (require.main === module) {
    exports.server = server = app.listen(port, () => {
        console.log(`Expense Manager app listening at http://localhost:${port}`);
    });
}
