import { AlgorithmType } from "./enums/algorithm-type.enum";
import { RawData } from "../interfaces/raw-data";
import { VisualizerService } from "../services/visualizer.service";

export class Algorithm {
  public type: AlgorithmType;

  constructor(visualizerService: VisualizerService, algorithmType: AlgorithmType) {
    this.type = algorithmType;
  }

  async sort(data: RawData[], delay: number) {}
}
