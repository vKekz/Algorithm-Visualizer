import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";

export class HeapSort implements Algorithm {
  public type: AlgorithmType;

  constructor() {
    this.type = AlgorithmType.HeapSort;
  }

  sort(data: RawData[]): void {
    let length = data.length;

    for (let i = Math.floor(length / 2); i > 1; i--) {
      this.sink(data, i, length);
    }

    while (length > 1) {
      const temp = data[1];
      data[1] = data[length];
      data[length] = temp;

      length--;

      this.sink(data, 1, length);
    }
  }

  private sink(data: RawData[], index: number, length: number) {
    while (2 * index <= length) {
      let j = 2 * index;
      if (j < length && data[j].value < data[j + 1].value) {
        j++;
      }

      if (data[index].value < data[j].value) {
        break;
      }

      const temp = data[index];
      data[index] = data[j];
      data[j] = temp;
      index = j;
    }
  }
}
