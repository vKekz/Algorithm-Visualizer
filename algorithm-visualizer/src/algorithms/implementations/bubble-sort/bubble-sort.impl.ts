﻿import { AlgorithmType } from "../../enums/algorithm-type.enum";
import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { startDelay } from "../../../helpers/delay.helper";
import { VisualizerService } from "../../../services/visualizer.service";

export class BubbleSort implements Algorithm {
  public type: AlgorithmType;

  constructor(private readonly visualizerService: VisualizerService) {
    this.type = AlgorithmType.BubbleSort;
  }

  async sort(data: RawData[], delay: number) {
    let length = data.length;

    while (length > 0) {
      for (let i = 0; i < length - 1; i++) {
        const first = data[i];
        const compare = data[i + 1];

        first.inComparison = true;
        compare.inComparison = true;

        this.visualizerService.incrementCompare();

        while (this.visualizerService.isPaused()) {
          await startDelay(1);
        }
        if (this.visualizerService.isStopped()) {
          break;
        }

        if (compare.value <= first.value) {
          data[i] = data[i + 1];
          data[i + 1] = first;
          this.visualizerService.incrementSwap();
        }

        await startDelay(delay);

        first.inComparison = false;
        compare.inComparison = false;
      }

      length--;
    }
  }
}
