import { Component } from "@angular/core";
import { MAX_DELAY, MIN_DELAY } from "../../../constants/visualizer.constants";
import { OptionsService } from "../../../services/options.service";
import { VisualizerService } from "../../../services/visualizer.service";

@Component({
  selector: "app-algorithm-delay-slider",
  standalone: true,
  imports: [],
  templateUrl: "./algorithm-delay-slider.component.html",
  styleUrl: "./algorithm-delay-slider.component.css",
})
export class AlgorithmDelaySliderComponent {
  constructor(
    protected readonly optionsService: OptionsService,
    protected readonly visualizerService: VisualizerService
  ) {}

  public handleDelayInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.optionsService.delay = target.valueAsNumber;
  }

  protected readonly MIN_DELAY = MIN_DELAY;
  protected readonly MAX_DELAY = MAX_DELAY;
}
