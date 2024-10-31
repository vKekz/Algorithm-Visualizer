import { RawData } from "../../../interfaces/raw-data";
import { Algorithm } from "../../algorithm";
import { AlgorithmType } from "../../enums/algorithm-type.enum";

export class MergeSort implements Algorithm {
  public type: AlgorithmType;

  constructor() {
    this.type = AlgorithmType.MergeSort;
  }

  sort(data: RawData[]): RawData[] {
    if (data.length <= 1) {
      return data;
    }

    const mid = Math.round(data.length / 2);
    let left: RawData[] = data.slice(0, mid);
    let right: RawData[] = data.slice(mid, data.length);

    left = this.sort(left);
    right = this.sort(right);

    console.log(left);

    // data = [];

    return this.merge(left, right, data);
  }

  private merge(left: RawData[], right: RawData[], buffer: RawData[]): RawData[] {
    // clear buffer
    // buffer = [];

    let left_index = 0,
      right_index = 0;

    while (left_index < left.length && right_index < right.length) {
      if (left[left_index].value <= right[right_index].value) {
        buffer.push(left[left_index]);
        left_index += 1;
      } else {
        buffer.push(right[right_index]);
        right_index += 1;
      }
    }

    while (left_index < left.length) {
      buffer.push(left[left_index]);
      left_index += 1;
    }

    while (right_index < right.length) {
      buffer.push(right[right_index]);
      right_index += 1;
    }

    return buffer;
  }
}
