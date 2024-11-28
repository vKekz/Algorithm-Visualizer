import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";
import { startDelay } from "../../../helpers/delay.helper";
import { VisualizerService } from "../../../services/visualizer.service";

export class HeapSort implements Algorithm {
  public type: AlgorithmType;

  constructor(private readonly visualizerService: VisualizerService) {
    this.type = AlgorithmType.HeapSort;
  }

  async sort(data: RawData[], delay: number): Promise<void> {
    let length = data.length;
    await this.heapSort(data, delay, length);
  }

  // https://en.wikipedia.org/wiki/Heapsort
  private async heapSort(data: RawData[], delay: number, length: number) {
    await this.heapify(data, delay, length);

    let end = length;
    while (end > 1) {
      end--;

      const temp = data[end];
      data[end] = data[0];
      data[0] = temp;
      this.visualizerService.incrementSwap();

      await this.siftDown(data, delay, 0, end);
    }
  }

  private async heapify(data: RawData[], delay: number, count: number) {
    let start = Math.floor((count - 1 - 1) / 2) + 1;

    while (start > 0) {
      start--;
      await this.siftDown(data, delay, start, count);
    }
  }

  private async siftDown(data: RawData[], delay: number, root: number, end: number) {
    while (2 * root + 1 < end) {
      let leftChildIndex = 2 * root + 1;

      if (leftChildIndex + 1 < end && data[leftChildIndex].value < data[leftChildIndex + 1].value) {
        leftChildIndex++;
      }

      data[root].inComparison = true;
      this.visualizerService.incrementCompare();
      

      await startDelay(delay);

      if (data[root].value >= data[leftChildIndex].value) {
        data[root].inComparison = false;
        break;
      }

      data[root].inComparison = false;

      const temp = data[root];
      data[root] = data[leftChildIndex];
      data[leftChildIndex] = temp;
      this.visualizerService.incrementSwap();

      root = leftChildIndex;
    }
  }
}
