import { BehaviorSubject } from "rxjs";

const counter$ = new BehaviorSubject(0);

export const counterStore = {
  counter$: counter$.asObservable(),
  increment: () => {
    counter$.next(counter$.value + 1);
  },
};
