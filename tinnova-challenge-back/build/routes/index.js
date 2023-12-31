"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const veiculo_1 = __importDefault(require("./veiculo"));
const marca_1 = __importDefault(require("./marca"));
// import { colaborador as colaboradorController } from "../controllers";
// import { authorization } from "../middlewares";
const routes = (0, express_1.Router)();
// routes.use("/cliente", authorization, cliente);
// routes.use("/colaborador", authorization, colaborador);
// routes.use("/projeto", authorization, projeto);
// routes.use("/turno", authorization, turno);
// routes.post("/login", colaboradorController.login);
routes.use("/veiculos", veiculo_1.default);
routes.use("/marcas", marca_1.default);
routes.use((req, res) => res.status(404).json({ error: "Requisição desconhecida" }));
exports.default = routes;
