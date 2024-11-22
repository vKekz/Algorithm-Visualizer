import { Component } from "@angular/core";
import { AlgorithmSelectorComponent } from "./components/algorithm-selector/algorithm-selector.component";
import { VisualizerComponent } from "./components/visualizer/visualizer.component";
import {AlgorithmOptionsComponent} from './components/algorithm-options/algorithm-options.component';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [AlgorithmSelectorComponent, VisualizerComponent, AlgorithmOptionsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {}



document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('togglecheckbox') as HTMLInputElement;

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      document.documentElement.style.setProperty('--body-color', 'linear-gradient(to top right, #191d32, #333b52)');
      document.documentElement.style.setProperty('--text-color', '#F7DD72');
      document.documentElement.style.setProperty('--button-text-color', 'black');
    }else{
      document.documentElement.style.setProperty('--body-color', 'linear-gradient(to top right, #F7DD72, #CD956D)');
      document.documentElement.style.setProperty('--text-color', 'black');
      document.documentElement.style.setProperty('--button-text-color', '#F7DD72');
    }
  });
});