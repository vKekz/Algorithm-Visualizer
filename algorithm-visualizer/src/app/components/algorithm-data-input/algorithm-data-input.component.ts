import { Component } from "@angular/core";
import { AlgorithmHandler } from "../../../services/algorithm.handler";
import { DEFAULT_AMOUNT_OF_ELEMENTS } from "../../../constants/app.constants";

@Component({
  selector: "app-algorithm-data-input",
  standalone: true,
  imports: [],
  templateUrl: "./algorithm-data-input.component.html",
  styleUrl: "./algorithm-data-input.component.css",
})
export class AlgorithmDataInputComponent {
  constructor(protected readonly algorithmHandler: AlgorithmHandler) {
    this.generateData();
  }

  public generateData() {
    const length = DEFAULT_AMOUNT_OF_ELEMENTS;

    this.algorithmHandler.clearData();
    for (let i = 1; i <= length; i++) {
      this.algorithmHandler.rawDataList.push({
        index: i,
        value: Math.random(),
      });
    }

    console.log(this.algorithmHandler.algorithm?.sort(this.algorithmHandler.rawDataList));
  }
}
