import { IncrementAction } from "./IncrementAction";
import { DecrementAction } from "./DecrementAction";
import { InitAction } from "./InitAction";

export * from "./ActionType"
export * from "./DecrementAction"
export * from "./IncrementAction"
export * from "./InitAction"

export type CounterAction = IncrementAction | DecrementAction | InitAction
