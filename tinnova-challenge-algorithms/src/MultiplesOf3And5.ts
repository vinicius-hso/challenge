export default class MultiplesOf3And5 {
  constructor() { }

  sumExcludeN(n: number): number {
    n--
    if (n <= 0) return 0;
    else if (n % 3 === 0 || n % 5 === 0) return n + this.sumExcludeN(n);
    else return this.sumExcludeN(n);
  }

  sumIncludeN(n: number): number {
    if (n <= 0) return 0;
    else if (n % 3 === 0 || n % 5 === 0) return n + this.sumIncludeN(n - 1);
    else return this.sumIncludeN(n - 1);
  }
}