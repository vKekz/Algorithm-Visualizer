import { Component } from "@angular/core";
import { VisualizerComponent } from "./components/visualizer/visualizer.component";
import { AlgorithmOptionsComponent } from "./components/algorithm-options/algorithm-options.component";
import { AlgorithmCounterComponent } from "./components/algorithm-counter/algorithm-counter.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [VisualizerComponent, AlgorithmOptionsComponent, AlgorithmCounterComponent, HeaderComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
