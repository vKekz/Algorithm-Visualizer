import { Injectable } from "@angular/core";
import { Algorithm } from "../algorithms/algorithm";
import { RawData } from "../interfaces/raw-data";
import { BubbleSort } from "../algorithms/implementations/bubble-sort/bubble-sort.impl";
import { SelectionSort } from "../algorithms/implementations/selection-sort/selection-sort.impl";

@Injectable({
  providedIn: "root",
})
export class AlgorithmHandler {
  private readonly algorithmList: Algorithm[];

  public algorithm?: Algorithm;
  public rawDataList: RawData[];

  constructor() {
    this.algorithmList = [];
    this.rawDataList = [];

    this.registerAlgorithm(new BubbleSort());
    this.registerAlgorithm(new SelectionSort());
  }

  public clearData() {
    this.rawDataList = [];
  }

  public selectAlgorithm(index: number): void {
    this.algorithm = this.getAlgorithms()[index];
  }

  private registerAlgorithm(algorithm: Algorithm): void {
    this.algorithmList.push(algorithm);
  }

  public getAlgorithms(): Algorithm[] {
    return this.algorithmList;
  }
}
