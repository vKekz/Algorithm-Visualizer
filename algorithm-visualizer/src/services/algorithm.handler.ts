import { Injectable } from "@angular/core";
import { Algorithm } from "../algorithms/algorithm";
import { BubbleSort } from "../algorithms/implementations/bubble-sort.impl";
import { RawData } from "../interfaces/raw-data";

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
  }

  public fillData(data: RawData[]) {
    this.rawDataList = data;
  }

  public clearData() {
    this.rawDataList = [];
  }

  public selectAlgorithm(index: number): void {
    const algorithm = this.getAlgorithms()[index];
    console.log(algorithm.type);

    this.algorithm = algorithm;
  }

  private registerAlgorithm(algorithm: Algorithm): void {
    this.algorithmList.push(algorithm);
  }

  public getAlgorithms(): Algorithm[] {
    return this.algorithmList;
  }
}
