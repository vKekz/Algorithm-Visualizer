import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";
import { delay } from "../../../helpers/delay.helper";

export class InsertionSort implements Algorithm {
  public type: AlgorithmType;

  constructor() {
    this.type = AlgorithmType.InsertionSort;
  }

  async sort(data: RawData[]): Promise<RawData[]> {
    const length = data.length;

    for (let i = 1; i < length; i++) {
      let j = i;
      const element = data[i];

      element.inComparison = true;

      // comparison
      while (j > 0 && element.value < data[j - 1].value) {
        // the swap
        data[j] = data[j - 1];
        data[j - 1] = element;

        j -= 1;

        await delay(100);
      }

      element.inComparison = false;

      data[j] = element;
    }

    return data;
  }
}
