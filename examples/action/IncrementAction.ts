import { ActionType } from "./ActionType";
import { Action } from "../../lib/Model";

export class IncrementAction implements Action {

  readonly type = ActionType.INCREMENT

  constructor(public payload = 1) {
  }
}
