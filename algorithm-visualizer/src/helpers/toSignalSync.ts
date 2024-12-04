import { Observable } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";

export const toSignalSync = <T>(observable: Observable<T>) => toSignal(observable, { requireSync: true });
