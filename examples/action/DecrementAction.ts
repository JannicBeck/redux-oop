import { ActionType } from "./ActionType";
import { Action } from '../../lib/Model';

export class DecrementAction implements Action {

  readonly type = ActionType.DECREMENT

  constructor(public payload = 1) {
  }
}
