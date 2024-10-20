import { Component } from "@angular/core";
import { AlgorithmHandler } from "../../../services/algorithm.handler";

@Component({
  selector: "app-algorithm-selector",
  standalone: true,
  imports: [],
  templateUrl: "./algorithm-selector.component.html",
  styleUrl: "./algorithm-selector.component.css",
})
export class AlgorithmSelectorComponent {
  constructor(protected readonly algorithmHandler: AlgorithmHandler) {}
}
