export default class Fatorial {
    constructor () {}

    calculate(n: number): number {
        return n === 0 ? 1 : n * this.calculate(n - 1);
    }
}