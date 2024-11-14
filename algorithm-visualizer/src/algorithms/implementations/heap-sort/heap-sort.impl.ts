import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";
import { delay } from "../../../helpers/delay.helper";

export class HeapSort implements Algorithm {
  public type: AlgorithmType;

  constructor() {
    this.type = AlgorithmType.HeapSort;
  }

  async sort(data: RawData[]): Promise<void> {
    let length = data.length;
    await this.heapSort(data, length);
  }

  // https://en.wikipedia.org/wiki/Heapsort
  private async heapSort(data: RawData[], length: number) {
    await this.heapify(data, length);

    let end = length;
    while (end > 1) {
      end--;

      const temp = data[end];
      data[end] = data[0];
      data[0] = temp;

      await this.siftDown(data, 0, end);
    }
  }

  private async heapify(data: RawData[], count: number) {
    let start = Math.floor((count - 1 - 1) / 2) + 1;

    while (start > 0) {
      start--;
      await this.siftDown(data, start, count);
    }
  }

  private async siftDown(data: RawData[], root: number, end: number) {
    while (2 * root + 1 < end) {
      let leftChildIndex = 2 * root + 1;

      if (leftChildIndex + 1 < end && data[leftChildIndex].value < data[leftChildIndex + 1].value) {
        leftChildIndex++;
      }

      data[root].inComparison = true;

      await delay(25);

      if (data[root].value >= data[leftChildIndex].value) {
        data[root].inComparison = false;
        break;
      }

      data[root].inComparison = false;

      const temp = data[root];
      data[root] = data[leftChildIndex];
      data[leftChildIndex] = temp;

      root = leftChildIndex;
    }
  }
}
