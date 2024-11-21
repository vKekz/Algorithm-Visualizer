import { Component } from "@angular/core";
import { AlgorithmDataInputComponent } from "../algorithm-data-input/algorithm-data-input.component";
import { AlgorithmSelectorComponent } from "../algorithm-selector/algorithm-selector.component";
import { AlgorithmDelaySliderComponent } from "../algorithm-delay-slider/algorithm-delay-slider.component";
import { AlgorithmElementsSliderComponent } from "../algorithm-elements-slider/algorithm-elements-slider.component";
import { AlgorithmToggleComponent } from '../algorithm-toggle/algorithm-toggle.component';

@Component({
  selector: "app-algorithm-options",
  standalone: true,
  imports: [
    AlgorithmDataInputComponent,
    AlgorithmSelectorComponent,
    AlgorithmDelaySliderComponent,
    AlgorithmElementsSliderComponent,
    AlgorithmToggleComponent,
  ],
  templateUrl: "./algorithm-options.component.html",
  styleUrl: "./algorithm-options.component.css",
})
export class AlgorithmOptionsComponent {}
