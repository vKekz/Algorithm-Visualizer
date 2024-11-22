import { Component } from "@angular/core";
import { MAX_ELEMENTS, MIN_ELEMENTS } from "../../../constants/visualizer.constants";
import { OptionsService } from "../../../services/options.service";
import { VisualizerService } from "../../../services/visualizer.service";

@Component({
  selector: "app-algorithm-elements-slider",
  standalone: true,
  imports: [],
  templateUrl: "./algorithm-elements-slider.component.html",
  styleUrl: "./algorithm-elements-slider.component.css",
})
export class AlgorithmElementsSliderComponent {
  constructor(
    private readonly visualizerService: VisualizerService,
    protected readonly optionsService: OptionsService
  ) {}

  public handleElementsInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const amountOfElements = target.valueAsNumber;
    this.optionsService.amountOfElements = amountOfElements;

    // TODO: Check if not running
    this.visualizerService.generateRawSortingData(amountOfElements);
  }

  protected readonly MIN_ELEMENTS = MIN_ELEMENTS;
  protected readonly MAX_ELEMENTS = MAX_ELEMENTS;
}
