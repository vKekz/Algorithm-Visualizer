import { Component } from "@angular/core";
import { AlgorithmService } from "../../../services/algorithm.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-algorithm-selector",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./algorithm-selector.component.html",
  styleUrl: "./algorithm-selector.component.css",
})
export class AlgorithmSelectorComponent {
  constructor(protected readonly algorithmHandler: AlgorithmService) {}

  public handleAlgorithmSelection(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const index = Number.parseInt(target.value);

    this.algorithmHandler.selectAlgorithm(index);
  }
}
