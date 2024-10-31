import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";

export class InsertionSort implements Algorithm {
  public type: AlgorithmType;

  constructor() {
    this.type = AlgorithmType.InsertionSort;
  }

  sort(data: RawData[]): RawData[] {
    const length = data.length;
    let i = 1;

    while (i < length) {
      const element = data[i];
      let j = i;

      while (j > 0 && element < data[j - 1]) {
        data[j] = data[j - 1];
        data[j - 1] = element;

        j = j - 1;

        data[j] = element;
        i = i + 1;
      }
    }

    return data;
  }
}
