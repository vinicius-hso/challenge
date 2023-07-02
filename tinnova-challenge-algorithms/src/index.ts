import VotesPercentual from "./VotesPercentual";
import Fatorial from "./Fatorial";
import MultiplesOf3And5 from "./MultiplesOf3And5";
import BubbleSort from "./BubbleSort";

// * 1. Percentual de Votos
const totalVotes = 1000
const validVotes = 800
const blankVotes = 150
const nullVotes = 50

const votes = new VotesPercentual(totalVotes, validVotes, blankVotes, nullVotes)

console.log("\n1. Votes Percentual")
console.log(votes.getValidVotesPercentual())
console.log(votes.getBlankVotesPercentual())
console.log(votes.getNullVotesPercentual())

// * 2. Bubble Sort
const arr = [243, 45, 23, 356, 3, 5346, 35, 5];

const bubble = new BubbleSort()

console.log("\n2. Bubble Sort")
console.log(bubble.sort(arr))

// * 3. Fatorial
const fatorial = new Fatorial()

console.log("\n3. Fatorial")
console.log(fatorial.calculate(5))

// * 4. Soma dos múltiplos de 3 e 5
const multiples = new MultiplesOf3And5()

console.log("\n4. Soma dos múltiplos de 3 e 5")
console.log(multiples.sumExcludeN(10))
console.log(multiples.sumIncludeN(10))