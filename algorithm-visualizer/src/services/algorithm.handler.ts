import { Injectable } from "@angular/core";
import { Algorithm } from "../algorithms/algorithm";
import { BubbleSort } from "../algorithms/implementations/bubble-sort";

@Injectable({
  providedIn: "root",
})
export class AlgorithmHandler {
  private readonly algorithms: Algorithm[];

  constructor() {
    this.algorithms = [];

    this.registerAlgorithm(new BubbleSort());
  }

  private registerAlgorithm(algorithm: Algorithm): void {
    this.algorithms.push(algorithm);
  }

  public getAlgorithms(): Algorithm[] {
    return this.algorithms;
  }
}
