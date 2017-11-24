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

export const reducers = {
  videos: videoReducer,
  emails: emailReducer,
  user: userReducer
};


export const getUser = (state: State) => fromUser.getUser(state.user);
export const getVideos = (state: State) => fromVideos.getAll(state.videos);
export const getVideo = (state: State, id: number) => fromVideos.get(state.videos, id);

export const getVideosLoading = (state: State) => fromVideos.getLoading(state.videos);
export const getVideosLoaded = (state: State) => fromVideos.getLoaded(state.videos);


export const getVideoOfEmail = (state: State, id: number) => {
  const email = fromEmails.get(state.emails, id);

  return getVideo(state, email.video_id);
}



