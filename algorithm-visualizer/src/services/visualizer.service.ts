import { Injectable } from "@angular/core";
import { RawData } from "../interfaces/raw-data";
import { AlgorithmData } from "../interfaces/algorithm-data";
import { State } from "../enums/state.enum";

@Injectable({
  providedIn: "root",
})
export class VisualizerService {
  public readonly algorithmData: AlgorithmData;
  public rawSortingData: RawData[];
  public state: State;

  constructor() {
    this.rawSortingData = [];
    this.algorithmData = { comparisons: 0, swaps: 0 };
    this.state = State.Stopped;
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
    this.state = State.Stopped;
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
