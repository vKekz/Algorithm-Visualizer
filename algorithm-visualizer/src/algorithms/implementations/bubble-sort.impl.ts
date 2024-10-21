import { Algorithm } from "../algorithm";
import { AlgorithmType } from "../enums/algorithm-type.enum";

export class BubbleSort implements Algorithm {
  public type: AlgorithmType;

  constructor() {
    this.type = AlgorithmType.BubbleSort;

    const data = [103, 33, 2452, 4, 2, 333];
    console.log(data);
    console.log(this.sort(data));
  }

  sort(data: number[]): number[] {
    let length = data.length;

    while (length > 0) {
      for (let i = 0; i < length - 1; i++) {
        const first = data[i];
        const compare = data[i + 1];

        if (compare <= first) {
          data[i] = compare;
          data[i + 1] = first;
        }
      }
      length--;
    }

    return data;
  }
}
