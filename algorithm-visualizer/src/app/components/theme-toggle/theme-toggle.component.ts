import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { OptionsService } from "../../../services/options.service";
import { Theme } from "../../../enums/theme.enum";

@Component({
  selector: "app-theme-toggle",
  standalone: true,
  imports: [],
  templateUrl: "./theme-toggle.component.html",
  styleUrl: "./theme-toggle.component.css",
})
export class ThemeToggleComponent implements AfterViewInit {
  @ViewChild("theme_toggle")
  public themeToggle?: ElementRef<HTMLInputElement>;

  constructor(private readonly optionsService: OptionsService) {}

  ngAfterViewInit() {
    if (this.optionsService.theme == Theme.DARK) {
      // check the toggle
      this.themeToggle?.nativeElement.click();
    }
  }

  public handleThemeToggle() {
    const toggle = this.themeToggle?.nativeElement;
    if (toggle == null) {
      return;
    }

    const checked = toggle.checked;
    const bodyColor: string = checked ? "#191d32, #333b52" : "#F7DD72, #CD956D";
    const textColor: string = checked ? "#F7DD72" : "black";
    const buttonTextColor: string = checked ? "black" : "#F7DD72";

    document.documentElement.style.setProperty("--body-color", `linear-gradient(to top right, ${bodyColor})`);
    document.documentElement.style.setProperty("--text-color", textColor);
    document.documentElement.style.setProperty("--button-text-color", buttonTextColor);

    this.optionsService.theme = checked ? Theme.DARK : Theme.LIGHT;
  }
}
