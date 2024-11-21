import { Injectable } from "@angular/core";
import { Algorithm } from "../algorithms/algorithm";
import { BubbleSort } from "../algorithms/implementations/bubble-sort/bubble-sort.impl";
import { SelectionSort } from "../algorithms/implementations/selection-sort/selection-sort.impl";
import { MergeSort } from "../algorithms/implementations/merge-sort/merge-sort.impl";
import { InsertionSort } from "../algorithms/implementations/insertion-sort/insertion-sort.impl";
import { QuickSort } from "../algorithms/implementations/quick-sort/quick-sort.impl";
import { HeapSort } from "../algorithms/implementations/heap-sort/heap-sort.impl";
import { VisualizerService } from "./visualizer.service";
import { OptionsService } from "./options.service";

@Injectable({
  providedIn: "root",
})
export class AlgorithmService {
  private readonly algorithmList: Algorithm[];

  public currentAlgorithm?: Algorithm;

  constructor(
    private readonly visualizerService: VisualizerService,
    private readonly optionsService: OptionsService
  ) {
    this.algorithmList = [];

    this.registerAlgorithm(new BubbleSort());
    this.registerAlgorithm(new SelectionSort());
    this.registerAlgorithm(new MergeSort());
    this.registerAlgorithm(new InsertionSort());
    this.registerAlgorithm(new QuickSort());
    this.registerAlgorithm(new HeapSort());

    // Create random data on startup
    this.visualizerService.generateRawSortingData(this.optionsService.amountOfElements);
  }

  public async startSorting() {
    const algorithm = this.currentAlgorithm;
    if (algorithm == null) {
      return;
    }

    await this.currentAlgorithm?.sort(this.visualizerService.rawSortingData, this.optionsService.delay);
    console.log("finished");
  }

  public selectAlgorithm(index: number): void {
    this.currentAlgorithm = this.getAlgorithms()[index];
  }

  private registerAlgorithm(algorithm: Algorithm): void {
    this.algorithmList.push(algorithm);
  }

  public getAlgorithms(): Algorithm[] {
    return this.algorithmList;
  }
}
