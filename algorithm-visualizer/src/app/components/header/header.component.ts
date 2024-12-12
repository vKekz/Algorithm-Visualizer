import { Component } from "@angular/core";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { AlgorithmService } from "../../../services/algorithm.service";

@Component({
  selector: "app-header",
  imports: [ThemeToggleComponent],
  templateUrl: "./header.component.html",
  standalone: true,
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
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
