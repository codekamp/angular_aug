import {Action} from '@ngrx/store';
import {User} from '../models/user';
import {Video} from '../models/video';

export const LOGIN = 'Login Action';
export const VIDEOS_LOADING = 'Videos loading Action';
export const VIDEOS_LOADED = 'Videos loaded Action';
export const UPDATE_PROFILE = 'Update User Profile';
export const VIDEO_ADDED = 'Video added';


export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) {
  }
}

export class UserUpdateAction implements Action {
  readonly type = UPDATE_PROFILE;

  constructor(public payload: User) {
  }
}

export class VideosLoadingAction implements Action {
  readonly type = VIDEOS_LOADING;
}

export class VideosLoadedAction implements Action {
  readonly type = VIDEOS_LOADED;

  constructor(public payload: Video[]) {
  }
}


export class VideoAddedAction implements Action {
  readonly type = VIDEO_ADDED;

  constructor(public payload: Video) {
  }
}
