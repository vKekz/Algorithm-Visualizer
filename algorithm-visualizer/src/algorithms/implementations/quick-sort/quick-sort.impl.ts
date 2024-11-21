import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";
import { startDelay } from "../../../helpers/delay.helper";
import { VisualizerService } from "../../../services/visualizer.service";
import { State } from "../../../enums/state.enum";

export class QuickSort implements Algorithm {
  public type: AlgorithmType;

  constructor(private readonly visualizerService: VisualizerService) {
    this.type = AlgorithmType.QuickSort;
  }

  async sort(data: RawData[], delay: number) {
    await this.quickSort(data, delay, 0, data.length - 1);
  }

  private async quickSort(data: RawData[], delay: number, lower: number, higher: number) {
    if (lower >= 0 && higher >= 0 && lower < higher) {
      while (this.visualizerService.state === State.Paused) {
        await startDelay(1);
      }
      if (this.visualizerService.state == State.Stopped) {
        return;
      }

      const partition = await this.partition(data, delay, lower, higher);
      await this.quickSort(data, delay, lower, partition);
      await this.quickSort(data, delay, partition + 1, higher);
    }
  }

  // Implemented from https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme
  private async partition(data: RawData[], delay: number, lower: number, higher: number) {
    const pivot = data[lower];
    pivot.isPivot = true;

    let left = lower - 1;
    let right = higher + 1;

    while (true) {
      do {
        left++;
      } while (data[left].value < pivot.value);

      do {
        right--;
      } while (data[right].value > pivot.value);

      data[left].inComparison = true;
      data[right].inComparison = true;

      await startDelay(delay);

      if (left >= right) {
        pivot.isPivot = false;
        data[left].inComparison = false;
        data[right].inComparison = false;
        return right;
      }

      const temp = data[left];
      data[left] = data[right];
      data[right] = temp;

      data[left].inComparison = false;
      data[right].inComparison = false;
    }
  }
}
