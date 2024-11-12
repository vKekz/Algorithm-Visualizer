import { AlgorithmType } from "../../enums/algorithm-type.enum";
import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { delay } from "../../../helpers/delay.helper";
import { AlgorithmHandler } from "../../../services/algorithm.handler";

export class BubbleSort implements Algorithm {
  public type: AlgorithmType;

  constructor(private readonly algorithmHandler: AlgorithmHandler) {
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

        first.inComparison = true;
        compare.inComparison = true;

        if (compareValue <= firstValue) {
          first.value = compareValue;
          compare.value = firstValue;
        }

        await delay(this.algorithmHandler.sortingDelay);

        first.inComparison = false;
        compare.inComparison = false;
      }
      length--;
    }

    return data;
  }
}
