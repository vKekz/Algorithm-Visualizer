import { DELAY_DEFAULT, ELEMENTS_DEFAULT } from "../constants/visualizer.constants";
import { Injectable } from "@angular/core";
import { fromEvent } from "rxjs";
import { Theme } from "../enums/theme.enum";

@Injectable({
  providedIn: "root",
})
export class OptionsService {
  private readonly BEFORE_UNLOAD_EVENT_NAME: string = "beforeunload";

  private readonly delayKey: string = "delay";
  private readonly amountOfElementsKey: string = "amountOfElements";
  private readonly themeKey: string = "theme";

  public delay: number = 0;
  public amountOfElements: number = 0;
  public theme: Theme = 0;

  constructor() {
    fromEvent(window, this.BEFORE_UNLOAD_EVENT_NAME).subscribe(() => {
      this.handleSaving();
    });

    this.loadOptions();
  }

  private handleSaving() {
    localStorage.setItem(this.delayKey, JSON.stringify(this.delay));
    localStorage.setItem(this.amountOfElementsKey, JSON.stringify(this.amountOfElements));
    localStorage.setItem(this.themeKey, JSON.stringify(this.theme));
  }

  private loadOptions() {
    this.delay = this.getLocalDelay();
    this.amountOfElements = this.getLocalAmountOfElements();
    this.theme = this.getLocalTheme();
  }

  private getLocalDelay() {
    const localDelay = localStorage.getItem(this.delayKey);
    if (localDelay == null) {
      return DELAY_DEFAULT;
    }

    return Number.parseInt(localDelay);
  }

  private getLocalAmountOfElements() {
    const localAmountOfElements = localStorage.getItem(this.amountOfElementsKey);
    if (localAmountOfElements == null) {
      return ELEMENTS_DEFAULT;
    }

    return Number.parseInt(localAmountOfElements);
  }

  private getLocalTheme() {
    const localTheme = localStorage.getItem(this.themeKey);
    if (localTheme == null) {
      return Theme.LIGHT;
    }

    return Object.keys(Theme)
      .filter((x) => !isNaN(Number(x)))
      .indexOf(localTheme);
  }
}
