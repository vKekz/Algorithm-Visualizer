import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { VisualizerStateModel } from "./model/VisualizerStateModel";
import { Status } from "../enums/state.enum";
import { UpdateStatus } from "./visualizer.actions";

@State<VisualizerStateModel>({
  name: "visualizer",
  defaults: {
    currentStatus: Status.Stopped,
  },
})
@Injectable()
export class VisualizerState {
  @Selector()
  static getStatus(state: VisualizerStateModel) {
    return state.currentStatus;
  }

  @Action(UpdateStatus)
  updateStatus(context: StateContext<VisualizerStateModel>, { status }: UpdateStatus) {
    context.patchState({ currentStatus: status });
  }
}
