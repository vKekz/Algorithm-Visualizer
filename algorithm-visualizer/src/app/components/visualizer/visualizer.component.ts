import { Component } from "@angular/core";
import { AlgorithmHandler } from "../../../services/algorithm.handler";
import { NgClass, NgStyle } from "@angular/common";

@Component({
  selector: "app-visualizer",
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: "./visualizer.component.html",
  styleUrl: "./visualizer.component.css",
})
export class VisualizerComponent {
  constructor(protected readonly algorithmHandler: AlgorithmHandler) {}
}
