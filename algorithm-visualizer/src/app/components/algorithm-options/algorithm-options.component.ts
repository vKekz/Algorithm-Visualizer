import { Component } from "@angular/core";
import { AlgorithmSelectorComponent } from "../algorithm-selector/algorithm-selector.component";
import { AlgorithmDelaySliderComponent } from "../algorithm-delay-slider/algorithm-delay-slider.component";
import { AlgorithmElementsSliderComponent } from "../algorithm-elements-slider/algorithm-elements-slider.component";
import { VisualizerToggleComponent } from "../visualizer-toggle/visualizer-toggle.component";
import { AlgorithmService } from "../../../services/algorithm.service";
import { AlgorithmTooltipComponent } from '../algorithm-tooltip/algorithm-tooltip.component';

@Component({
  selector: "app-algorithm-options",
  standalone: true,
  imports: [
    AlgorithmSelectorComponent,
    AlgorithmDelaySliderComponent,
    AlgorithmElementsSliderComponent,
    VisualizerToggleComponent,
    AlgorithmTooltipComponent,
  ],
  templateUrl: "./algorithm-options.component.html",
  styleUrl: "./algorithm-options.component.css",
})
export class AlgorithmOptionsComponent {
  constructor(protected readonly algorithmService: AlgorithmService) {}
}
