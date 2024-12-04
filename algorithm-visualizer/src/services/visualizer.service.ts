import { Injectable } from "@angular/core";
import { RawData } from "../interfaces/raw-data";
import { AlgorithmData } from "../interfaces/algorithm-data";
import { Status } from "../enums/state.enum";
import { toSignalSync } from "../helpers/toSignalSync";
import { Store } from "@ngxs/store";
import { VisualizerState } from "../state/visualizer.state";

@Injectable({
  providedIn: "root",
})
export class VisualizerService {
  public readonly algorithmData: AlgorithmData;
  public rawSortingData: RawData[];
  // @ts-ignore
  public state = toSignalSync(this.store.select(VisualizerState.getStatus));

  constructor(private readonly store: Store) {
    this.algorithmData = { comparisons: 0, swaps: 0 };
    this.rawSortingData = [];
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

    this.reset();
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
    return this.state() === Status.Stopped;
  }

  public isPaused() {
    return this.state() === Status.Paused;
  }

  public isRunning() {
    return this.state() === Status.Running;
  }
}
