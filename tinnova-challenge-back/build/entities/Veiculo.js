"use strict";
// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   ManyToOne,
//   JoinColumn
// } from "typeorm";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Marca from "./Marca";
// @Entity("veiculos")
// export default class Veiculo {
//   @PrimaryGeneratedColumn("uuid")
//   id!: string;
//   @Column({ length: 20 })
//   veiculo!: string;
//   // @ManyToOne(() => Marca, (marca) => marca.id)
//   @ManyToOne(() => Marca, { eager: true })
//   @JoinColumn({ name: "marcaId" }) //
//   marcaId!: Marca;
//   @Column({ length: 4 })
//   ano!: string;
//   @Column({ length: 20 })
//   cor!: string;
//   @Column({ type: "text", nullable: true })
//   descricao!: string | null;
//   @Column({ default: false })
//   vendido!: boolean;
//   @CreateDateColumn({ type: "timestamp" })
//   criado!: Date;
//   @UpdateDateColumn({ type: "timestamp" })
//   atualizado!: Date;
// }
const typeorm_1 = require("typeorm");
const Marca_1 = __importDefault(require("./Marca"));
let Veiculo = class Veiculo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Veiculo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Veiculo.prototype, "veiculo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Marca_1.default, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "marca_id" }),
    __metadata("design:type", Marca_1.default)
], Veiculo.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 4 }),
    __metadata("design:type", String)
], Veiculo.prototype, "ano", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Veiculo.prototype, "cor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", Object)
], Veiculo.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Veiculo.prototype, "vendido", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Veiculo.prototype, "criado", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Veiculo.prototype, "atualizado", void 0);
Veiculo = __decorate([
    (0, typeorm_1.Entity)("veiculos")
], Veiculo);
exports.default = Veiculo;
