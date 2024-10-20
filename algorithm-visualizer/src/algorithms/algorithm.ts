import { AlgorithmType } from "./enums/algorithm-type.enum";

export class Algorithm {
  public type: AlgorithmType;

  constructor(algorithmType: AlgorithmType) {
    this.type = algorithmType;
  }

  sort(data: number[]) {}
}
