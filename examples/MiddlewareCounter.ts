import { Action, Reducer, MiddlewareAPI, Dispatch, ThunkAction } from '../lib/Model';
import { MiddlewareStore } from '../lib/MiddlewareStore';
import { CounterAction, IncrementAction, DecrementAction, ActionType } from './action';


export class MiddlewareCounter extends MiddlewareStore<number, CounterAction> {

  private logger = <S, A extends Action>(store: MiddlewareAPI<S, A>) => (next: Dispatch<A>) => (action: A) => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }

  private isThunkAction = <R, S, A extends Action>(action: A | ThunkAction<R, A, S>): action is ThunkAction<R, A, S> =>
    typeof action === 'function'

  private thunk = <S, A extends Action>(store: MiddlewareAPI<S, A>) =>
    (next: Dispatch<A>) => (action: A | ThunkAction<S, A, S>) => {

    if (this.isThunkAction(action)) {
      return action(store.dispatch, store.getState)
    }

    return next(action);
  }

  protected middlewares = [this.thunk, this.logger]

  increment (payload?: number) {
    this.dispatch(new IncrementAction(payload))
  }

  incrementAsync () {
    this.dispatch(dispatch => setTimeout(() => dispatch(new IncrementAction()), 1000))
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
