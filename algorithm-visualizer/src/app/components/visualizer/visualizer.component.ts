import { Component, OnDestroy } from "@angular/core";
import { NgClass, NgStyle } from "@angular/common";
import { RawData } from "../../../interfaces/raw-data";
import { VisualizerService } from "../../../services/visualizer.service";
import { fromEvent, Subscription } from "rxjs";
import { OptionsService } from "../../../services/options.service";

@Component({
  selector: "app-visualizer",
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: "./visualizer.component.html",
  styleUrl: "./visualizer.component.css",
})
export class VisualizerComponent implements OnDestroy {
  private keyboardEvent: Subscription;
  private readonly KEYDOWN_EVENT: string = "keydown";

  constructor(
    protected readonly visualizerService: VisualizerService,
    private readonly optionsService: OptionsService
  ) {
    this.keyboardEvent = fromEvent(window, this.KEYDOWN_EVENT).subscribe(async (event) => {
      await this.handleKeyBoardEvent(event as KeyboardEvent);
    });
  }

  ngOnDestroy() {
    this.keyboardEvent.unsubscribe();
  }

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

  private async handleKeyBoardEvent(event: KeyboardEvent) {
    if (!this.visualizerService.isStopped()) {
      return;
    }

    const key = event.key;
    const keyR = "r";

    if (key == keyR) {
      this.visualizerService.generateRawSortingData(this.optionsService.amountOfElements);
      event.preventDefault();
    }
  }
}
