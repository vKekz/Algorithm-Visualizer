import { Component } from "@angular/core";
import { VisualizerService } from "../../../services/visualizer.service";
import { OptionsService } from "../../../services/options.service";
import { AlgorithmService } from "../../../services/algorithm.service";

@Component({
  selector: "app-algorithm-data-input",
  standalone: true,
  imports: [],
  templateUrl: "./algorithm-data-input.component.html",
  styleUrl: "./algorithm-data-input.component.css",
})
export class AlgorithmDataInputComponent {
  constructor(
    private readonly algorithmService: AlgorithmService,
    private readonly visualizerService: VisualizerService,
    private readonly optionsService: OptionsService
  ) {}

  public generateData() {
    this.visualizerService.generateRawSortingData(this.optionsService.amountOfElements);
    this.algorithmService.startSorting();
  }
}
