"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MultiplesOf3And5 {
    constructor() { }
    sumExcludeN(n) {
        n--;
        if (n <= 0)
            return 0;
        else if (n % 3 === 0 || n % 5 === 0)
            return n + this.sumExcludeN(n);
        else
            return this.sumExcludeN(n);
    }
    sumIncludeN(n) {
        if (n <= 0)
            return 0;
        else if (n % 3 === 0 || n % 5 === 0)
            return n + this.sumIncludeN(n - 1);
        else
            return this.sumIncludeN(n - 1);
    }
}
exports.default = MultiplesOf3And5;
