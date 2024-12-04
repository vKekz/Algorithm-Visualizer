import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";
import { startDelay } from "../../../helpers/delay.helper";
import { VisualizerService } from "../../../services/visualizer.service";

export class SelectionSort implements Algorithm {
  public type: AlgorithmType;

  constructor(private readonly visualizerService: VisualizerService) {
    this.type = AlgorithmType.SelectionSort;
  }

  async sort(data: RawData[], delay: number) {
    let i = 0,
      length = data.length;

    while (i < length - 1) {
      let minIndex = i,
        j = i + 1;

      while (j < length) {
        const first = data[minIndex],
          compare = data[j];

        first.inComparison = true;
        compare.inComparison = true;
        this.visualizerService.incrementCompare();

        while (this.visualizerService.isPaused()) {
          await startDelay(1);
        }
        if (this.visualizerService.isStopped()) {
          break;
        }

        if (compare.value < first.value) {
          minIndex = j;
        }
        j++;

        await startDelay(delay);

        first.inComparison = false;
        compare.inComparison = false;
      }

      const temp = data[i];
      data[i] = data[minIndex];
      data[minIndex] = temp;

      i++;
      this.visualizerService.incrementSwap();
    }
  }
}
