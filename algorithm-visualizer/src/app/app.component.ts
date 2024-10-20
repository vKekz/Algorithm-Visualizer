import { Component } from "@angular/core";
import { AlgorithmSelectorComponent } from "./components/algorithm-selector/algorithm-selector.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [AlgorithmSelectorComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}
