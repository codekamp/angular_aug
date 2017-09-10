import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import {VideoService} from './services/video';
import {NotifyService} from './services/notify';

@Component({
  selector: 'app-login',
  template: `
    <md-card fxLayout="column" fxLayoutAlign="start stretch" fxLayoutGap="30px">
      <h2>Login</h2>
      <md-input-container class="username" [formGroup]="xyz">
        <input [formControlName]="'username'" mdInput placeholder="Enter username"/>
        <md-error>Username is required and should be a valid email</md-error>
      </md-input-container>
      <md-input-container class="password" [formGroup]="xyz">
        <input [formControlName]="'password'" mdInput placeholder="Enter password"/>
        <md-error>Password is required</md-error>
      </md-input-container>
      <button [color]="'primary'" (click)="myLogin()"
              md-raised-button fxFlexAlign="end" fxFlexAlign.xs="stretch">Login
        <md-icon>check</md-icon>
      </button>
    </md-card>
  `,
  styles: [`
    md-card {
      width: 700px;
      height: 600px;
    }
  `]
})
export class LoginComponent {

  xyz: FormGroup;
  passwordControl: FormControl;
  private notifyService: NotifyService;
  private videoService: VideoService;

  constructor(@Inject('xyz') ser: NotifyService, videoService: VideoService, @Inject('API_KEY') myKey: string) {
    this.notifyService = ser;
    this.videoService = videoService;
    const usernameControl = new FormControl(null, [Validators.required, Validators.email]);
    this.passwordControl = new FormControl();

    this.xyz = new FormGroup({
      username: usernameControl,
      password: this.passwordControl
    });

    const a = usernameControl.valueChanges.combineLatest(this.passwordControl.valueChanges, (un, pw) => {
      console.log('un is ' + un + ' and pw is ' + pw);
      return {un, pw};
    });

    a.subscribe((value) => {
      console.log('value fired on a is: ')
      console.log(value);
    });

    const b = usernameControl.valueChanges.switchMap((value) => {
      return Observable.interval(1000);
    });

    // b.subscribe((value) => {
    //   console.log(value);
    // });
  }

  myLogin() {
    this.notifyService.notify('Suspicious login detected. please ....');
    const videos = this.videoService.getVideoList();
  }

  doSomething(data: any) {
    console.log(data);
  }

  //
  // onInput(value) {
  //   console.log(value.srcElement.value);
  // }

  onValueChange(a: string) {
    console.log(a);
  }
}
