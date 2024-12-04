import { Component } from "@angular/core";
import { AlgorithmService } from "../../../services/algorithm.service";
import { FormsModule } from "@angular/forms";
import { VisualizerService } from "../../../services/visualizer.service";

@Component({
  selector: "app-algorithm-selector",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./algorithm-selector.component.html",
  styleUrl: "./algorithm-selector.component.css",
})
export class AlgorithmSelectorComponent {
  constructor(
    protected readonly algorithmService: AlgorithmService,
    protected readonly visualizerService: VisualizerService
  ) {}

  public handleAlgorithmSelection(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const index = Number.parseInt(target.value);

    this.algorithmService.selectAlgorithm(index);
  }
}
