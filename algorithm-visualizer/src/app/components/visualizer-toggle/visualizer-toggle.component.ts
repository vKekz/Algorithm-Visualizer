import { Component, OnDestroy } from "@angular/core";
import { VisualizerService } from "../../../services/visualizer.service";
import { AlgorithmService } from "../../../services/algorithm.service";
import { Status } from "../../../enums/status.enum";
import { fromEvent, Subscription } from "rxjs";

@Component({
  selector: "app-visualizer-toggle",
  standalone: true,
  imports: [],
  templateUrl: "./visualizer-toggle.component.html",
  styleUrl: "./visualizer-toggle.component.css",
})
export class VisualizerToggleComponent implements OnDestroy {
  private keyboardEvent: Subscription;
  private readonly KEYDOWN_EVENT: string = "keydown";

  constructor(
    protected readonly algorithmService: AlgorithmService,
    protected readonly visualizerService: VisualizerService
  ) {
    this.keyboardEvent = fromEvent(window, this.KEYDOWN_EVENT).subscribe(async (event) => {
      await this.handleKeyBoardEvent(event as KeyboardEvent);
    });
  }

  ngOnDestroy() {
    this.keyboardEvent.unsubscribe();
  }

  public async handleToggle() {
    if (this.algorithmService.currentAlgorithm == null) {
      return;
    }

    const status = this.visualizerService.status;
    if (status == Status.Stopped) {
      await this.algorithmService.startSorting();
      return;
    }

    this.visualizerService.status = status == Status.Running ? Status.Paused : Status.Running;
  }

  private async handleKeyBoardEvent(event: KeyboardEvent) {
    const key = event.key;
    const keySpace = " ";

    if (key === keySpace) {
      await this.handleToggle();
    }

    event.preventDefault();
  }
}
