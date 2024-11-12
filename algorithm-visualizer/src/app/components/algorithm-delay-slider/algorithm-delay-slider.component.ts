import { Component } from "@angular/core";
import { AlgorithmHandler } from "../../../services/algorithm.handler";
import { MAX_DELAY, MIN_DELAY } from "../../../constants/visualizer.constants";

@Component({
  selector: "app-algorithm-delay-slider",
  standalone: true,
  imports: [],
  templateUrl: "./algorithm-delay-slider.component.html",
  styleUrl: "./algorithm-delay-slider.component.css",
})
export class AlgorithmDelaySliderComponent {
  constructor(protected readonly algorithmHandler: AlgorithmHandler) {}

  public handleDelayInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.algorithmHandler.sortingDelay = target.valueAsNumber;
  }

  protected readonly MIN_DELAY = MIN_DELAY;
  protected readonly MAX_DELAY = MAX_DELAY;
}
