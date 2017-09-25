import {User} from '../models/user';
import {Video} from '../models/video';
import {Actions, LOGIN, VIDEOS_LOADED} from '../actions/index';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
  user: User;
  videos: Video[];
}

const initialState: State = {
  user: null,
  videos: []
}

export const videoReducer = (state: Video[] = [], action: Actions): Video[] => {
  console.log('reducer called', state, action);
  switch (action.type) {
    case VIDEOS_LOADED:
      return action.payload;
    default:
      return state;
  }
}

export const userReducer = (state: User = null, action: Actions): User => {
  console.log('reducer called', state, action);
  switch (action.type) {
    case LOGIN:
      return action.payload;
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<State> = {
  user: userReducer,
  videos: videoReducer,
};


export const getUser = (state: State) => state.user;
export const getVideos = (state: State) => state.videos;
