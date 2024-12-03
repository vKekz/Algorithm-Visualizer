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
import { ShellSort } from "../algorithms/implementations/shell-sort/shell-sort.impl";
import { State } from "../enums/state.enum";

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

    this.registerAlgorithm(new BubbleSort(this.visualizerService));
    this.registerAlgorithm(new SelectionSort(this.visualizerService));
    this.registerAlgorithm(new MergeSort(this.visualizerService));
    this.registerAlgorithm(new InsertionSort(this.visualizerService));
    this.registerAlgorithm(new QuickSort(this.visualizerService));
    this.registerAlgorithm(new HeapSort(this.visualizerService));
    this.registerAlgorithm(new ShellSort(this.visualizerService));

    // Create random data on startup
    this.visualizerService.generateRawSortingData(this.optionsService.amountOfElements);
  }

  public async startSorting() {
    if (!this.visualizerService.isStopped()) {
      return;
    }

    const algorithm = this.currentAlgorithm;
    if (algorithm == null) {
      return;
    }

    this.visualizerService.state.set(State.Running);
    await algorithm.sort(this.visualizerService.rawSortingData, this.optionsService.delay);
    this.visualizerService.state.set(State.Stopped);
    console.log("test");
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
