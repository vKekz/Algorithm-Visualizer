﻿import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";
import { startDelay } from "../../../helpers/delay.helper";
import { VisualizerService } from "../../../services/visualizer.service";

export class ShellSort implements Algorithm {
  public type: AlgorithmType;

  constructor(private readonly visualizerService: VisualizerService) {
    this.type = AlgorithmType.ShellSort;
  }

  async sort(data: RawData[], delay: number) {
    await this.shellSort(data, delay);
  }

  // https://en.wikipedia.org/wiki/Shellsort
  private async shellSort(data: RawData[], delay: number) {
    const gaps: number[] = this.generateGaps(data.length);

    for (const gap of gaps) {
      for (let i = gap; i < data.length; i++) {
        const temp = data[i];

        let j;
        for (j = i; j >= gap && data[j - gap].value > temp.value; j -= gap) {
          data[j] = data[j - gap];
          this.visualizerService.incrementSwap();
        }

        data[j] = temp;
        data[j].inComparison = true;
        this.visualizerService.incrementCompare();

        await startDelay(delay);

        data[j].inComparison = false;
      }
    }
  }

  // Lee's improved Tokuda gaps: https://oeis.org/A366726
  private generateGaps(max: number) {
    const gamma: number = 2.243609061420001;
    const gaps: number[] = [];

    for (let n = max; n > 0; n--) {
      const gap = Math.ceil((Math.pow(gamma, n) - 1) / (gamma - 1));
      gaps.push(gap);
    }

    return gaps;
  }
}
