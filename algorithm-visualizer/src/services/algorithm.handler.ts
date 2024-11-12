import { Injectable } from "@angular/core";
import { Algorithm } from "../algorithms/algorithm";
import { RawData } from "../interfaces/raw-data";
import { BubbleSort } from "../algorithms/implementations/bubble-sort/bubble-sort.impl";
import { SelectionSort } from "../algorithms/implementations/selection-sort/selection-sort.impl";
import { MergeSort } from "../algorithms/implementations/merge-sort/merge-sort.impl";
import { InsertionSort } from "../algorithms/implementations/insertion-sort/insertion-sort.impl";
import { QuickSort } from "../algorithms/implementations/quick-sort/quick-sort.impl";
import { DELAY_DEFAULT, ELEMENTS_DEFAULT } from "../constants/visualizer.constants";

@Injectable({
  providedIn: "root",
})
export class AlgorithmHandler {
  private readonly algorithmList: Algorithm[];

  public algorithm?: Algorithm;
  public rawDataList: RawData[];

  public sortingDelay: number;
  public amountOfElements: number;

  constructor() {
    this.algorithmList = [];
    this.rawDataList = [];

    this.sortingDelay = DELAY_DEFAULT;
    this.amountOfElements = ELEMENTS_DEFAULT;

    this.registerAlgorithm(new BubbleSort(this));
    this.registerAlgorithm(new SelectionSort(this));
    this.registerAlgorithm(new MergeSort(this));
    this.registerAlgorithm(new InsertionSort(this));
    this.registerAlgorithm(new QuickSort(this));
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
