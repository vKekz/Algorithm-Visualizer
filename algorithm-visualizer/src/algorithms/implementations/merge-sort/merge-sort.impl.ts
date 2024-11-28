import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";
import { startDelay } from "../../../helpers/delay.helper";
import { VisualizerService } from "../../../services/visualizer.service";

export class MergeSort implements Algorithm {
  public type: AlgorithmType;

  constructor(private readonly visualizerService: VisualizerService) {
    this.type = AlgorithmType.MergeSort;
  }

  async sort(data: RawData[], delay: number) {
    await this.mergeSort(data, delay, 0, data.length);
  }

  // From https://github.com/Myphz/sortvisualizer/blob/master/static/js/sorts/mergesort.js
  // TODO: Write better function (not copied)
  private async mergeSort(data: RawData[], delay: number, start: number, end: number) {
    if (start >= end - 1) {
      return;
    }
    const mid = start + ~~((end - start) / 2);

    await this.mergeSort(data, delay, start, mid);
    await this.mergeSort(data, delay, mid, end);

    const cache: RawData[] = [];
    let k = mid;

    for (let i = start, r = 0; i < mid; r++, i++) {
      this.visualizerService.incrementCompare();
      while (k < end && data[k].value < data[i].value) {
        cache[r] = data[k];
        r++;
        k++;
      }

      cache[r] = data[i];
    }

    for (let i = 0; i < k - start; i++) {
      data[i + start] = cache[i];
      await startDelay(delay);
      this.visualizerService.incrementSwap();
    }
  }

  private merge(left: RawData[], right: RawData[]): RawData[] {
    let arr: RawData[] = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        arr.push(left.shift() as RawData);
      } else {
        arr.push(right.shift() as RawData);
      }
    }

    return [...arr, ...left, ...right];
  }

  // private async mergeSort(data: RawData[], start: number, end: number) {
  //   if (start >= end - 1) {
  //     return data;
  //   }
  //
  //   const mid = start + ((end - start) / 2);
  //
  //   await this.mergeSort(data, start, mid);
  //   await this.mergeSort(data, mid, end);
  //
  //   await delay(100);
  //
  //   return this.merge(left, right);
  // }

  // async sort(data: RawData[]): Promise<RawData[]> {
  //   if (data.length <= 1) {
  //     return data;
  //   }
  //
  //   const mid = Math.round(data.length / 2);
  //   let left: RawData[] = data.slice(0, mid);
  //   let right: RawData[] = data.slice(mid, data.length);
  //
  //   left = await this.sort(left);
  //   right = await this.sort(right);
  //
  //   await delay(100);
  //
  //   return this.merge(left, right);
  // }
  //
  // private merge(left: RawData[], right: RawData[]): RawData[] {
  //   // clear buffer
  //   const buffer: RawData[] = [];
  //
  //   let left_index = 0,
  //     right_index = 0;
  //
  //   while (left_index < left.length && right_index < right.length) {
  //     if (left[left_index].value <= right[right_index].value) {
  //       buffer.push(left[left_index]);
  //       left_index += 1;
  //     } else {
  //       buffer.push(right[right_index]);
  //       right_index += 1;
  //     }
  //   }
  //
  //   while (left_index < left.length) {
  //     buffer.push(left[left_index]);
  //     left_index += 1;
  //   }
  //
  //   while (right_index < right.length) {
  //     buffer.push(right[right_index]);
  //     right_index += 1;
  //   }
  //
  //   return buffer;
  // }
}
