import { AlgorithmType } from "./enums/algorithm-type.enum";
import { RawData } from "../interfaces/raw-data";

export class Algorithm {
  public type: AlgorithmType;

  constructor(algorithmType: AlgorithmType) {
    this.type = algorithmType;
  }

  async sort(data: RawData[], delay: number) {}
}
