import { Action, Reducer, MiddlewareAPI, Dispatch } from '../lib/Model';
import { Store } from '../lib/Store';
import {
  IncrementAction,
  DecrementAction,
  InitAction,
  ActionType,
  CounterAction
} from './action';


export class Counter extends Store<number, CounterAction> {

  state = this.reduce(this.state, new InitAction())

  increment (payload?: number) {
    this.dispatch(new IncrementAction(payload))
  }

  incrementAsync () {
    setTimeout(() => this.increment(), 1000)
  }

  decrement (payload?: number) {
    this.dispatch(new DecrementAction(payload))
  }

  reduce (state = 0, action: CounterAction): number {
  
    switch(action.type) {
  
      case ActionType.INCREMENT:
        return state + action.payload
  
      case ActionType.DECREMENT:
        return state - action.payload
  
      default:
        return state
  
    }
  
  }

}
