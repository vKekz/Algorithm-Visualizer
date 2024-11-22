import { Component } from "@angular/core";
import { NgClass, NgStyle } from "@angular/common";
import { RawData } from "../../../interfaces/raw-data";
import { VisualizerService } from "../../../services/visualizer.service";

@Component({
  selector: "app-visualizer",
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: "./visualizer.component.html",
  styleUrl: "./visualizer.component.css",
})
export class VisualizerComponent {
  constructor(protected readonly visualizerService: VisualizerService) {}

  public getStyleClasses(data: RawData) {
    let classes = "";

    if (data.inComparison) {
      classes += "comparison";
    }
    if (data.inOtherComparison) {
      classes += " other-comparison";
    }
    if (data.isPivot) {
      classes += " pivot";
    }

    return classes;
  }
}
