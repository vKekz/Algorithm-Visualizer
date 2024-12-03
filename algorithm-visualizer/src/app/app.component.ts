import { Component } from "@angular/core";
import { AlgorithmSelectorComponent } from "./components/algorithm-selector/algorithm-selector.component";
import { VisualizerComponent } from "./components/visualizer/visualizer.component";
import { AlgorithmOptionsComponent } from "./components/algorithm-options/algorithm-options.component";
import { AlgorithmService } from "../services/algorithm.service";
import { ThemeToggleComponent } from "./components/theme-toggle/theme-toggle.component";
import { AlgorithmCounterComponent } from './components/algorithm-counter/algorithm-counter.component';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    AlgorithmSelectorComponent,
    VisualizerComponent,
    AlgorithmOptionsComponent,
    ThemeToggleComponent,
    AlgorithmCounterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  public readonly title: string = "Algorithm visualizer";

  constructor(private readonly algorithmService: AlgorithmService) {}

  public getTitle() {
    const algorithm = this.algorithmService.currentAlgorithm;
    if (algorithm == null) {
      return this.title;
    }

    return `${this.title} - ${algorithm.type}`;
  }
}
