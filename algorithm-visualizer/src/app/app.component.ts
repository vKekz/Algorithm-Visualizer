import { Component } from "@angular/core";
import { AlgorithmSelectorComponent } from "./components/algorithm-selector/algorithm-selector.component";
import { VisualizerComponent } from "./components/visualizer/visualizer.component";
import {AlgorithmOptionsComponent} from './components/algorithm-options/algorithm-options.component';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [AlgorithmSelectorComponent, VisualizerComponent, AlgorithmOptionsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
