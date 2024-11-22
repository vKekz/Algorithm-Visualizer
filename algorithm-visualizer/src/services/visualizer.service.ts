import { Injectable } from "@angular/core";
import { RawData } from "../interfaces/raw-data";

@Injectable({
  providedIn: "root",
})
export class VisualizerService {
  public rawSortingData: RawData[];

  constructor() {
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
  }
}
