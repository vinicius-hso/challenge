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
class MarcaController {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { query } = req;
                const response = yield dataSource_1.default.getRepository(entities_1.Marca).find({
                    where: query,
                    order: {
                        nome: "desc",
                    },
                });
                return res.json(response);
            }
            catch (error) {
                return res.json(error);
            }
        });
    }
}
exports.default = new MarcaController();
