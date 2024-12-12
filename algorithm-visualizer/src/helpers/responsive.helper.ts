import { toSignal } from "@angular/core/rxjs-interop";
import { fromEvent, map } from "rxjs";

export const RESPONSIVE_BREAK_POINT_IN_PX: number = 1024;
export const isResponsive = () =>
  toSignal(
    fromEvent(window, "resize").pipe(
      map((event) => (event.currentTarget as Window).innerWidth < RESPONSIVE_BREAK_POINT_IN_PX)
    ),
    {
      initialValue: innerWidth < RESPONSIVE_BREAK_POINT_IN_PX,
    }
  );
