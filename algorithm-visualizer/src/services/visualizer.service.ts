import { Injectable } from "@angular/core";
import { RawData } from "../interfaces/raw-data";
import { State } from "../enums/state.enum";

@Injectable({
  providedIn: "root",
})
export class VisualizerService {
  public rawSortingData: RawData[];
  public state: State;

  constructor() {
    this.rawSortingData = [];
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
}
