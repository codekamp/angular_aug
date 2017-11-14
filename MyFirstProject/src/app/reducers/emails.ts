import {Email} from '../models/email';
import {VideoState} from './videos';
import {Action} from '@ngrx/store';

export interface EmailState {
  ids: number[];
  entities: { [id: number]: Email };
  loading: boolean;
  loaded: boolean;
}

const initialState: EmailState = {
  ids: [],
  entities: null,
  loading: false,
  loaded: false
}

export function emailReducer(oldState: EmailState = initialState, action: Action): EmailState {
  switch (action.type) {
    default:
      return oldState;
  }
}
