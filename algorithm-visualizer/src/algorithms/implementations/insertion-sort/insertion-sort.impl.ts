import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";
import { startDelay } from "../../../helpers/delay.helper";

export class InsertionSort implements Algorithm {
  public type: AlgorithmType;

  constructor() {
    this.type = AlgorithmType.InsertionSort;
  }

  async sort(data: RawData[], delay: number) {
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

        await startDelay(delay);
      }

      element.inComparison = false;

      data[j] = element;
    }
  }
}
