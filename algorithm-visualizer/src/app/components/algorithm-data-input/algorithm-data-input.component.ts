import { Component } from "@angular/core";
import { VisualizerService } from "../../../services/visualizer.service";
import { OptionsService } from "../../../services/options.service";

@Component({
  selector: "app-algorithm-data-input",
  standalone: true,
  imports: [],
  templateUrl: "./algorithm-data-input.component.html",
  styleUrl: "./algorithm-data-input.component.css",
})
export class AlgorithmDataInputComponent {
  constructor(
    private readonly visualizerService: VisualizerService,
    private readonly optionsService: OptionsService
  ) {}

  public async generateData() {
    this.visualizerService.generateRawSortingData(this.optionsService.amountOfElements);
  }
}
