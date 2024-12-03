import { Injectable, signal, WritableSignal } from "@angular/core";
import { RawData } from "../interfaces/raw-data";
import { AlgorithmData } from "../interfaces/algorithm-data";
import { State } from "../enums/state.enum";

@Injectable({
  providedIn: "root",
})
export class VisualizerService {
  public readonly algorithmData: AlgorithmData;
  public rawSortingData: RawData[];
  public state: WritableSignal<State> = signal(State.Stopped);

  constructor() {
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

    console.log(this.state);
  }

  public incrementCompare() {
    this.algorithmData.comparisons++;
  }

  public incrementSwap() {
    this.algorithmData.swaps++;
  }

  public reset() {
    this.state.set(State.Stopped);
    this.algorithmData.comparisons = 0;
    this.algorithmData.swaps = 0;
  }

  public isStopped() {
    return this.state() === State.Stopped;
  }

  public isPaused() {
    return this.state() === State.Paused;
  }

  public isRunning() {
    return this.state() === State.Running;
  }
}
