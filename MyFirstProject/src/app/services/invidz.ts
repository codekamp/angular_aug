import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Video} from '../models/video';
import {User} from '../models/user';


const BASE_URL = 'https://api.invidz.com/api/';
const LOGIN_TOKEN_KEY = 'my_login_token';

@Injectable()
export class InvidzService {

  constructor(private http: Http) {
  }


  login(email: string, password): Observable<User> {
    return this.http.get(BASE_URL + 'authenticate?email=' + email + '&password=' + password)
      .map((value) => {
        const res = value.json();
        localStorage.setItem(LOGIN_TOKEN_KEY, res.token);
        return res.user;
      });
  }

  getVideos(): Observable<Video[]> {
    const options = new RequestOptions({headers: new Headers()});
    options.headers.append('Authorization', 'bearer ' + localStorage.getItem(LOGIN_TOKEN_KEY));
    return this.http.get(BASE_URL + 'videos', options).map((value) => value.json().data)
  }
}
