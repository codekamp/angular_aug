import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Video} from '../models/video';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../reducers/index';
import {LoginAction, UserUpdateAction, VideosLoadedAction} from '../actions/index';


const BASE_URL = 'https://api.invidz.com/api/';
const LOGIN_TOKEN_KEY = 'my_login_token';

@Injectable()
export class InvidzService {

  constructor(private http: Http, private router: Router, private store: Store<State>) {
  }


  login(email: string, password): Observable<User> {
    return this.http.get(BASE_URL + 'authenticate?email=' + email + '&password=' + password)
      .map((value) => {
        const res = value.json();
        localStorage.setItem(LOGIN_TOKEN_KEY, res.token);
        this.store.dispatch(new LoginAction(res.user));
        console.log('action fired');
        return res.user;
      });
  }

  getVideos(): Observable<Video[]> {
    const options = new RequestOptions({headers: new Headers()});
    options.headers.append('Authorization', 'bearer ' + localStorage.getItem(LOGIN_TOKEN_KEY));
    return this.http.get(BASE_URL + 'videos', options).map((value) => {
      const videos = value.json().data;
      this.store.dispatch(new VideosLoadedAction(videos));
      return videos;
    })
  }

  getProfile(): Observable<User> {
    const options = new RequestOptions({headers: new Headers()});
    options.headers.append('Authorization', 'bearer ' + localStorage.getItem(LOGIN_TOKEN_KEY));
    return this.http.get(BASE_URL + 'me', options).map((value) => {
      const user = value.json().data;
      this.store.dispatch(new UserUpdateAction(user));
      return user;
    });
  }

  logout() {
    localStorage.removeItem(LOGIN_TOKEN_KEY);
    this.router.navigate(['login'])
  }
}
