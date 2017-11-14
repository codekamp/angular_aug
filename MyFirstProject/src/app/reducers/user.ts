import {Action} from '@ngrx/store';
import {User} from '../models/user';
import {LOGIN, UPDATE_PROFILE} from '../actions/index';

export interface UserState {
  user: User;
}

export const initialState: UserState = {
  user: null
}

export function userReducer(oldState: UserState = initialState, action: Action): UserState {
  switch (action.type) {
    case LOGIN:
    case UPDATE_PROFILE:
      return {...oldState, ...{user: action.payload}};
    default:
      return oldState;
  }
}

export const getUser = (state: UserState) => state.user;
