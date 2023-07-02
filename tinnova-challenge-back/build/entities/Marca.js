"use strict";
// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   UpdateDateColumn,
//   OneToMany,
//   ManyToOne
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
Object.defineProperty(exports, "__esModule", { value: true });
// import Veiculo from "./Veiculo";
// @Entity("marcas")
// export default class Marca {
//   @PrimaryGeneratedColumn("uuid")
//   id!: string;
//   @Column({ length: 100 })
//   nome!: string;
//   @Column({ length: 20 })
//   nacionalidade!: string;
//   @CreateDateColumn({ type: "timestamp" })
//   criado!: Date;
//   @UpdateDateColumn({ type: "timestamp" })
//   atualizado!: Date;
//   // @ManyToOne(() => Veiculo, (veiculo) => veiculo.marcaId)
//   // veiculo: Veiculo;
//   // @OneToMany(() => Veiculo, (veiculo) => veiculo.marcaId, {cascade: true})
//   // veiculos!: Veiculo[]
// }
const typeorm_1 = require("typeorm");
let Marca = class Marca {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Marca.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Marca.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Marca.prototype, "nacionalidade", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Marca.prototype, "criado", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Marca.prototype, "atualizado", void 0);
Marca = __decorate([
    (0, typeorm_1.Entity)("marcas")
], Marca);
exports.default = Marca;
