import { Component } from "@angular/core";
import { AlgorithmHandler } from "../../../services/algorithm.handler";
import { MAX_ELEMENTS, MIN_ELEMENTS } from "../../../constants/visualizer.constants";

@Component({
  selector: "app-algorithm-elements-slider",
  standalone: true,
  imports: [],
  templateUrl: "./algorithm-elements-slider.component.html",
  styleUrl: "./algorithm-elements-slider.component.css",
})
export class AlgorithmElementsSliderComponent {
  constructor(protected readonly algorithmHandler: AlgorithmHandler) {}

  public handleElementsInput(event: Event) {}

  protected readonly MIN_ELEMENTS = MIN_ELEMENTS;
  protected readonly MAX_ELEMENTS = MAX_ELEMENTS;
}
