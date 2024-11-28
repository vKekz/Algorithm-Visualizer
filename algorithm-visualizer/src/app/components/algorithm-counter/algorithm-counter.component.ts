import { Component } from "@angular/core";
import { VisualizerService } from "../../../services/visualizer.service";
import { AlgorithmService } from "../../../services/algorithm.service";

@Component({
  selector: "app-algorithm-counter",
  standalone: true,
  templateUrl: "./algorithm-counter.component.html",
  styleUrls: ["./algorithm-counter.component.css"],
})
export class AlgorithmCounterComponent {
  constructor(
    protected readonly visualizerService: VisualizerService,
    protected readonly algorithmService: AlgorithmService
  ) {}
}
