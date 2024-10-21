import { Component } from "@angular/core";
import { AlgorithmSelectorComponent } from "./components/algorithm-selector/algorithm-selector.component";
import { VisualizerComponent } from "./components/visualizer/visualizer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [AlgorithmSelectorComponent, VisualizerComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
