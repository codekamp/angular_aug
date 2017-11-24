import {Video} from '../models/video';
import {Action} from '../actions/action';
import {VIDEO_ADDED, VIDEO_DELETED, VIDEOS_LOADED, VIDEOS_LOADING} from '../actions/index';
import {StoreUtils} from '../utils/store';

export interface VideoState {
  ids: number[];
  entities: { [id: number]: Video };
  loading: boolean;
  loaded: boolean;
}

export const initialState: VideoState = {
  ids: [],
  entities: null,
  loading: false,
  loaded: false
}

export function videoReducer(oldState: VideoState = initialState, action: Action): VideoState {
  switch (action.type) {
    case VIDEOS_LOADING:
      return {...oldState, ...{loading: true}};
    case VIDEOS_LOADED:
      const videos = action.payload;
      return {
        ...oldState, ...{
          entities: StoreUtils.normalize(videos),
          ids: StoreUtils.getIds(videos), loaded: true, loading: false
        }
      };
    case VIDEO_ADDED: {
      const video = action.payload;
      const newIds = [...oldState.ids, video.id];
      const newEntities = {...oldState.entities, ...{[video.id]: video}};
      return {...oldState, ...{entities: newEntities, ids: newIds}};
    }
    case VIDEO_DELETED: {
      const newIds = oldState.ids.filter(id => id !== action.payload);
      const newEntities = StoreUtils.removeKey(oldState.entities, action.payload);
      return {...oldState, ...{entities: newEntities, ids: newIds}};
    }
    default:
      return oldState;
  }
}

export const getAll = (state: VideoState) => StoreUtils.unnormalize(state.entities);
export const get = (state: VideoState, id: number) => this.entities ? state.entities[id] : null;
export const getLoading = (state: VideoState) => state.loading;
export const getLoaded = (state: VideoState) => state.loaded;
