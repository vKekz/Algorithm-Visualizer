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
  public accessCount: number = 0;
  public compareCount: number = 0;
  public swapCount: number = 0;

  

  incrementCompare() {
    this.compareCount++;
  }

  incrementSwap() {
    this.swapCount++;
  }

  reset() {
    this.accessCount = 0;
    this.compareCount = 0;
    this.swapCount = 0; 
  }
}
