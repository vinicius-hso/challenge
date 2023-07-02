"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VotesPercentual_1 = __importDefault(require("./VotesPercentual"));
const Fatorial_1 = __importDefault(require("./Fatorial"));
const MultiplesOf3And5_1 = __importDefault(require("./MultiplesOf3And5"));
const BubbleSort_1 = __importDefault(require("./BubbleSort"));
// * 1. Percentual de Votos
const totalVotes = 1000;
const validVotes = 800;
const blankVotes = 150;
const nullVotes = 50;
const votes = new VotesPercentual_1.default(totalVotes, validVotes, blankVotes, nullVotes);
console.log("\n1. Votes Percentual");
console.log(votes.getValidVotesPercentual());
console.log(votes.getBlankVotesPercentual());
console.log(votes.getNullVotesPercentual());
// * 2. Bubble Sort
const arr = [243, 45, 23, 356, 3, 5346, 35, 5];
const bubble = new BubbleSort_1.default();
console.log("\n2. Bubble Sort");
console.log(bubble.sort(arr));
// * 3. Fatorial
const fatorial = new Fatorial_1.default();
console.log("\n3. Fatorial");
console.log(fatorial.calculate(5));
// * 4. Soma dos múltiplos de 3 e 5
const multiples = new MultiplesOf3And5_1.default();
console.log("\n4. Soma dos múltiplos de 3 e 5");
console.log(multiples.sumExcludeN(10));
console.log(multiples.sumIncludeN(10));
