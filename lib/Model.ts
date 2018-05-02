export interface Action {
  type: string
}

export type Reducer<S, A extends Action> = (state: S, action: A) => S 

export interface MiddlewareAPI<S, A extends Action> {
  getState: () => S
  dispatch: (action: A) => A
}
export type Dispatch<A extends Action> = (action: A) => A
export type MiddlewareChain<S, A extends Action> = ((next: Dispatch<A>) => Dispatch<A>)[]
export type Middleware<S, A extends Action> = (middlewareAPI: MiddlewareAPI<S, A>) => (next: Dispatch<A>) => any
export type Listener<S> = (state?: S, ...args: any[]) => any
export type ThunkAction<R, A extends Action, S> = (dispatch: Dispatch<A>, getState: () => S) => R;
