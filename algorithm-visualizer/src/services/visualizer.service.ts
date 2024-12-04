import { Injectable } from "@angular/core";
import { RawData } from "../interfaces/raw-data";
import { AlgorithmData } from "../interfaces/algorithm-data";
import { Status } from "../enums/status.enum";

@Injectable({
  providedIn: "root",
})
export class VisualizerService {
  public readonly algorithmData: AlgorithmData;
  public rawSortingData: RawData[];
  public status: Status;

  constructor() {
    this.algorithmData = { comparisons: 0, swaps: 0 };
    this.rawSortingData = [];
    this.status = Status.Stopped;
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

  public incrementCompare() {
    this.algorithmData.comparisons++;
  }

  public incrementSwap() {
    this.algorithmData.swaps++;
  }

  public reset() {
    this.algorithmData.comparisons = 0;
    this.algorithmData.swaps = 0;
  }

  public isStopped() {
    return this.status === Status.Stopped;
  }

  public isPaused() {
    return this.status === Status.Paused;
  }

  public isRunning() {
    return this.status === Status.Running;
  }
}
