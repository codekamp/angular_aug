import {Action, combineReducers} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../../environments/environment';
import {videoReducer, VideoState} from './videos';
import {emailReducer, EmailState} from './emails';
import * as fromUser from './user';
import * as fromVideos from './videos';
import * as fromEmails from './emails';
import {userReducer, UserState} from './user';

export interface State {
  videos: VideoState;
  emails: EmailState;
  user: UserState;
}

const initialState: State = {
  videos: fromVideos.initialState,
  emails: null,
  user: fromUser.initialState
}

const reducer = combineReducers({
  videos: videoReducer,
  emails: emailReducer,
  user: userReducer
});

export function myReducer(oldState: State = initialState, action: Action) {
  if (environment.production) {
    return reducer(oldState, action);
  } else {
    const devReducer = storeFreeze(reducer);
    return devReducer(oldState, action);
  }
}


export const getUser = (state: State) => fromUser.getUser(state.user);
export const getVideos = (state: State) => fromVideos.getAll(state.videos);
export const getVideo = (state: State, id: number) => fromVideos.get(state.videos, id);

export const getVideosLoading = (state: State) => fromVideos.getLoading(state.videos);
export const getVideosLoaded = (state: State) => fromVideos.getLoaded(state.videos);


export const getVideoOfEmail = (state: State, id: number) => {
  const email = fromEmails.get(state.emails, id);

  return getVideo(state, email.video_id);
}



