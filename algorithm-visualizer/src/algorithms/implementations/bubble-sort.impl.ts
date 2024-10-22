import { Algorithm } from "../algorithm";
import { AlgorithmType } from "../enums/algorithm-type.enum";
import { RawData } from "../../interfaces/raw-data";

export class BubbleSort implements Algorithm {
  public type: AlgorithmType;

  constructor() {
    this.type = AlgorithmType.BubbleSort;
  }

  async sort(data: RawData[]): Promise<RawData[]> {
    let length = data.length;

    while (length > 0) {
      for (let i = 0; i < length - 1; i++) {
        const first = data[i];
        const compare = data[i + 1];

        const firstValue = first.value;
        const compareValue = compare.value;

        compare.inComparison = true;

        if (compareValue <= firstValue) {
          first.value = compareValue;
          compare.value = firstValue;
        }

        await this.timeout(250);
        compare.inComparison = false;
      }
      length--;
    }

    return data;
  }

  timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
