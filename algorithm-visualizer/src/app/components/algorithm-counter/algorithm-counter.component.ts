import { Component, ChangeDetectorRef } from "@angular/core";
import { VisualizerService } from "../../../services/visualizer.service";
//import { BubbleSort } from "../../../algorithms/implementations/bubble-sort/bubble-sort.impl";
//import { RawData } from "../../../interfaces/raw-data";

@Component({
    selector: 'app-algorithm-counter',
    standalone: true,
    templateUrl: './algorithm-counter.component.html',
    styleUrls: ['./algorithm-counter.component.css'],
  })
  export class AlgorithmCounterComponent {
    constructor(protected readonly visualizerService: VisualizerService,
    private cdRef: ChangeDetectorRef )  {
      console.log(visualizerService.accessCount);
    }

    ngAfterViewChecked() {
      // Manuelles Anstoßen der Change Detection
      this.cdRef.detectChanges();
    }
     

 //async sort(data: RawData[]) {
  //const bubbleSort = new BubbleSort(this.counterService); // Übergabe des Counter-Services an BubbleSort
  //await bubbleSort.sort(this.data); // BubbleSort wird mit den Daten und Zähler-Service aufgerufen
    }


   
  
  