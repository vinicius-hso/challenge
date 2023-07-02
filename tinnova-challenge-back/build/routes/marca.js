"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const routes = (0, express_1.Router)();
routes.get("/", controllers_1.marcaController.listAll);
exports.default = routes;
