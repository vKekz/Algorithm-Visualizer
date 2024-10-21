import { Injectable } from "@angular/core";
import { Algorithm } from "../algorithms/algorithm";
import { BubbleSort } from "../algorithms/implementations/bubble-sort.impl";

@Injectable({
  providedIn: "root",
})
export class AlgorithmHandler {
  private readonly algorithmList: Algorithm[];
  public algorithm?: Algorithm;

  constructor() {
    this.algorithmList = [];

    this.registerAlgorithm(new BubbleSort());
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
