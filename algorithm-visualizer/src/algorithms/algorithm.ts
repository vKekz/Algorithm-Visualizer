import { AlgorithmType } from "./enums/algorithm-type.enum";
import { RawData } from "../interfaces/raw-data";
import { AlgorithmHandler } from "../services/algorithm.handler";

export class Algorithm {
  public type: AlgorithmType;

  constructor(algorithmHandler: AlgorithmHandler, algorithmType: AlgorithmType) {
    this.type = algorithmType;
  }

  sort(data: RawData[]) {}
}
