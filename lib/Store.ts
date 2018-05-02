import { Action, Reducer, Listener } from "./Model";

export class Store<S, A extends Action> {

  protected state: S

  protected listeners: Listener<S>[] = []

  reduce (state: S, action: A): S {
    throw new Error("Please implement a reduce function in your reducer")
  }

  dispatch(action: A) {

    this.state = this.reduce(this.state, action)

    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i](this.state)
    }

    return action
  }

  getState() {
    return this.state
  }

  subscribe(listener) {
    this.listeners.push(listener)
    const unsubscribe = () => { 
      this.listeners.splice(this.listeners.indexOf(listener))
      return listener
    }
    return unsubscribe
  }

}
