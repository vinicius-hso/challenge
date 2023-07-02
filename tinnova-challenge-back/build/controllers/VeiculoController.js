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
const dataSource_1 = __importDefault(require("../dataSource"));
const entities_1 = require("../entities");
class VeiculoController {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { query } = req;
                query.marca = { nome: query.marca };
                const response = yield dataSource_1.default.getRepository(entities_1.Veiculo).find({
                    relations: ["marca"],
                    where: query,
                    order: {
                        criado: "desc",
                    },
                });
                return res.json(response);
            }
            catch (error) {
                return res.json(error);
            }
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const response = yield dataSource_1.default.getRepository(entities_1.Veiculo).find({
                    where: { id: id },
                });
                return res.json(response);
            }
            catch (error) {
                return res.json(error);
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { veiculo, marca, ano, cor, descricao, vendido } = req.body;
            if (!veiculo || veiculo.trim().length == 0) {
                return res.json({ error: "Informe o campo veículo" });
            }
            if (!marca || marca.trim().length == 0) {
                return res.json({ error: "Informe o campo marca" });
            }
            if (!ano || ano.trim().length == 0) {
                return res.json({ error: "Informe o campo ano" });
            }
            if (!cor || cor.trim().length == 0) {
                return res.json({ error: "Informe o campo cor" });
            }
            const marcaFound = yield dataSource_1.default.getRepository(entities_1.Marca).findOne({
                where: { id: marca },
            });
            if (!marcaFound)
                return res.status(404).json({ message: "Marca inválida" });
            const novoVeiculo = new entities_1.Veiculo();
            novoVeiculo.veiculo = veiculo.trim();
            novoVeiculo.marca = marca.trim();
            novoVeiculo.ano = ano.trim();
            novoVeiculo.cor = cor.trim();
            novoVeiculo.descricao = descricao;
            novoVeiculo.vendido = vendido;
            const response = yield dataSource_1.default.manager
                .save(entities_1.Veiculo, novoVeiculo)
                .catch((error) => {
                return { error: error.message };
            });
            return res.json(response);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { veiculo, marca, ano, cor, descricao, vendido } = req.body;
            if (!id || id.trim() === "") {
                return res.json({ error: "Informe o id do veículo" });
            }
            const marcaFound = yield dataSource_1.default.getRepository(entities_1.Marca).findOne({
                where: { id: marca },
            });
            if (!marcaFound)
                return res.status(404).json({ message: "Marca inválida" });
            const foundVeiculo = yield dataSource_1.default.manager.findOneBy(entities_1.Veiculo, {
                id,
            });
            if (foundVeiculo && foundVeiculo.id) {
                foundVeiculo.veiculo =
                    !veiculo || veiculo.trim() === ""
                        ? foundVeiculo.veiculo
                        : veiculo.trim();
                foundVeiculo.marca =
                    !marca || marca.trim() === "" ? foundVeiculo.marca : marca.trim();
                foundVeiculo.ano =
                    !ano || ano.trim() === "" ? foundVeiculo.ano : ano.trim();
                foundVeiculo.cor =
                    !cor || cor.trim() === "" ? foundVeiculo.cor : cor.trim();
                foundVeiculo.descricao =
                    !descricao || descricao.trim() === ""
                        ? foundVeiculo.descricao
                        : descricao.trim();
                foundVeiculo.vendido = !vendido ? foundVeiculo.vendido : vendido;
                const response = yield dataSource_1.default.manager
                    .save(entities_1.Veiculo, foundVeiculo)
                    .catch((error) => {
                    // testa se o CNPJ é repetido
                    // if (/(cnpj)[\s\S]+(already exists)/.test(e.detail)) {
                    //   return { error: "Este CNPJ já existe no cadastro" };
                    // }
                    return error.message;
                });
                return res.json(response);
            }
            else {
                return res.json({ error: "Cliente não localizado" });
            }
        });
    }
    updatePatch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { marca } = req.body;
            if (!id || id.trim() === "") {
                return res.json({ error: "Informe o id do veículo" });
            }
            if (marca) {
                const marcaFound = yield dataSource_1.default.getRepository(entities_1.Marca).findOne({
                    where: { nome: marca },
                });
                if (!marcaFound)
                    return res.status(404).json({ message: "Marca inválida" });
                req.body.marca = marcaFound.id;
            }
            const response = yield dataSource_1.default.manager
                .update(entities_1.Veiculo, id, req.body)
                .catch((error) => {
                return error.message;
            });
            if (response && response.affected === 1)
                return res.json({ message: "Veículo atualizado com sucesso" });
            else
                return res.status(404).json({ error: "Veiculo não localizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id || id.trim() === "") {
                return res.json({ error: "Forneça o id do veículo" });
            }
            const veiculoFound = yield dataSource_1.default.manager.findOneBy(entities_1.Veiculo, {
                id,
            });
            if (veiculoFound && veiculoFound.id) {
                const response = yield dataSource_1.default.manager
                    .remove(entities_1.Veiculo, veiculoFound)
                    .catch((error) => error.message);
                return res.json(response);
            }
            else {
                return res.status(404).json({ error: "Veículo não localizado" });
            }
        });
    }
}
exports.default = new VeiculoController();
