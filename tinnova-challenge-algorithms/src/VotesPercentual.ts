class Percentual {
  constructor() { }

  calculate(total: number, target: number): number {
    return (target * 100) / total;
  }
}

export default class VotesPercentual extends Percentual {
  totalVoters: number;
  totalValids: number;
  totalBlanks: number;
  totalNulls: number;

  constructor(
    totalVoters: number,
    totalValids: number,
    totalBlanks: number,
    totalNulls: number
  ) {
    super();
    this.totalVoters = totalVoters;
    this.totalValids = totalValids;
    this.totalBlanks = totalBlanks;
    this.totalNulls = totalNulls;
  }

  getValidVotesPercentual(): number {
    return this.calculate(this.totalVoters, this.totalValids);
  }

  getBlankVotesPercentual(): number {
    return this.calculate(this.totalVoters, this.totalBlanks);
  }

  getNullVotesPercentual(): number {
    return this.calculate(this.totalVoters, this.totalNulls);
  }
}
