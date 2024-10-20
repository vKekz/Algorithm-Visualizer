import { Algorithm } from "../algorithm";
import { AlgorithmType } from "../enums/algorithm-type.enum";

export class BubbleSort implements Algorithm {
  public type: AlgorithmType;

  constructor() {
    this.type = AlgorithmType.BubbleSort;
  }

  sort(): void {
    console.log("Test");
  }
}
