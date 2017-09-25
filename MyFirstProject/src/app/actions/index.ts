import {Action} from '@ngrx/store';
import {User} from '../models/user';
import {Video} from '../models/video';
export const LOGIN = 'Login Action';
export const VIDEOS_LOADED = 'Videos loaded Action';


export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) {
  }
}


export class VideosLoadedAction {
  readonly type = VIDEOS_LOADED;

  constructor(public payload: Video[]) {
  }
}

export type Actions = LoginAction | VideosLoadedAction;
