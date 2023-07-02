"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Percentual {
    constructor() { }
    calculate(total, target) {
        return (target * 100) / total;
    }
}
class VotesPercentual extends Percentual {
    constructor(totalVoters, totalValids, totalBlanks, totalNulls) {
        super();
        this.totalVoters = totalVoters;
        this.totalValids = totalValids;
        this.totalBlanks = totalBlanks;
        this.totalNulls = totalNulls;
    }
    getValidVotesPercentual() {
        return this.calculate(this.totalVoters, this.totalValids);
    }
    getBlankVotesPercentual() {
        return this.calculate(this.totalVoters, this.totalBlanks);
    }
    getNullVotesPercentual() {
        return this.calculate(this.totalVoters, this.totalNulls);
    }
}
exports.default = VotesPercentual;
