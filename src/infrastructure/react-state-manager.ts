import { State } from "../application/state";
import { Observer } from "../domain/observer/observer";
import { StateManager } from "../application/state-manager";
import { injectable } from "inversify";

@injectable()
export class ReactStateManager implements StateManager {
  private _state: State = new State();
  private readonly observers: Observer[] = [];

  constructor() {
    const state = JSON.parse(localStorage.getItem("state") || "{}") as State;

    this._state = state;
  }

  get state(): State {
    return this._state;
  }

  set state(value: State) {
    this._state = value;
    localStorage.setItem("state", JSON.stringify(this._state));
    this.notifyAll();
  }

  async patch(state: Partial<State>): Promise<void> {
    this.state = { ...this.state, ...state };
    await localStorage.setItem("state", JSON.stringify(this._state));
  }

  notifyAll() {
    this.observers.forEach((observer) => observer.notify());
  }

  register(observer: Observer) {
    this.observers.push(observer);
  }
}
