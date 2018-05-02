import { ActionType } from "./ActionType";
import { Action } from '../../lib/Model';

export class InitAction implements Action {
  readonly type = ActionType.INIT
}
