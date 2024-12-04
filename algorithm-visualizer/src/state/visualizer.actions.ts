import { Status } from "../enums/state.enum";

export class UpdateStatus {
  static readonly type = "[Visualizer] Update status";

  constructor(public status: Status) {}
}
