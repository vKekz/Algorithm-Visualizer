import { Injectable } from "@angular/core";
import { RawData } from "../interfaces/raw-data";
import { AlgorithmData } from "../interfaces/algorithm-data";

@Injectable({
  providedIn: "root",
})
export class VisualizerService {
  public rawSortingData: RawData[];
  public readonly algorithmData: AlgorithmData;

  constructor() {
    this.rawSortingData = [];
    this.algorithmData = { comparisons: 0, swaps: 0 };
  }

  public generateRawSortingData(amountOfElements: number) {
    this.rawSortingData = [];
    for (let i = 1; i <= amountOfElements; i++) {
      const data: RawData = {
        index: i,
        value: Math.random(),
      };
      this.rawSortingData.push(data);
    }
  }

  incrementCompare() {
    this.algorithmData.comparisons++;
  }

  incrementSwap() {
    this.algorithmData.swaps++;
  }

  reset() {
    this.algorithmData.comparisons = 0;
    this.algorithmData.swaps = 0;
  }
}
