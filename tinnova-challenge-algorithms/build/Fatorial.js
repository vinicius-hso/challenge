"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fatorial {
    constructor() { }
    calculate(n) {
        return n === 0 ? 1 : n * this.calculate(n - 1);
    }
}
exports.default = Fatorial;
