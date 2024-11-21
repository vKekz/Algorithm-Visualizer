import { Component } from "@angular/core";
import { VisualizerService } from "../../../services/visualizer.service";
import { AlgorithmService } from "../../../services/algorithm.service";
import { State } from "../../../enums/state.enum";

@Component({
  selector: "app-algorithm-toggle",
  standalone: true,
  imports: [],
  templateUrl: "./algorithm-toggle.component.html",
  styleUrl: "./algorithm-toggle.component.css",
})
export class AlgorithmToggleComponent {
  constructor(
    private readonly algorithmService: AlgorithmService,
    protected readonly visualizerService: VisualizerService
  ) {}

  public async handleToggle() {
    const state = this.visualizerService.state;
    if (state == State.Stopped) {
      await this.algorithmService.startSorting();
    }

    this.visualizerService.state = state == State.Running ? State.Paused : State.Running;
  }

  protected readonly State = State;
}
