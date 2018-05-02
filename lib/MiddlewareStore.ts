import {
  MiddlewareAPI,
  Action,
  MiddlewareChain,
  Middleware,
  Dispatch
} from "./Model";
import { Store } from "./Store";

export class MiddlewareStore<S, A extends Action> extends Store<S, A> {

  private middlewareAPI: MiddlewareAPI<S, A> = {
    getState: this.getState.bind(this),
    dispatch: (action: A) => { throw Error("Dispatching while constructing middleware not allowed") }
  }

  protected middlewares: Middleware<S, A>[];

  constructor() {
    super()
    this.middlewareAPI.dispatch = this.dispatch.bind(this)
  }

  dispatch(action: any) {

    let dispatchWithMiddleware: Dispatch<A> = super.dispatch.bind(this)

    for (let i = this.middlewares.length -1; i >= 0; i--) {
      dispatchWithMiddleware = this.middlewares[i](this.middlewareAPI)(dispatchWithMiddleware)
    }

    return dispatchWithMiddleware(action)
  }

}
