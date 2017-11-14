import {Email} from '../models/email';
import {VideoState} from './videos';
import {Action} from '@ngrx/store';

export interface EmailState {
  ids: number[];
  entities: { [id: number]: Email };
  loading: boolean;
  loaded: boolean;
  contacts: {[id: number]: number[]};
  contactsLoaded: number[];
  contactsLoading: number[];
}

const initialState: EmailState = {
  ids: [],
  entities: null,
  loading: false,
  loaded: false,
  contacts: null,
  contactsLoaded: [],
  contactsLoading: []
}

export function emailReducer(oldState: EmailState = initialState, action: Action): EmailState {
  switch (action.type) {
    default:
      return oldState;
  }
}


export const get = (state: EmailState, id: number) => this.entities ? state.entities[id] : null;
export const contactsLoading = (state: EmailState, id: number) => state.contactsLoading.indexOf(id) !== -1;
