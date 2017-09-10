import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';


@Injectable()
export class InvidzService {

  constructor(private http: Http) {
  }


  login(email: string, password): Observable<any> {
    console.log('email:' + email);
    console.log('password:' + password);

    return this.http.get('https://api.invidz.com/api/authenticate?email=' + email + '&password=' + password);
  }
}
