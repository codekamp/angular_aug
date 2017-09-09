import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import {switchMap} from '@angular/cdk';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

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
              [disabled]="xyz.invalid || xyz.pristine"
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

  constructor() {
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
      return 1000;
    });

    b.subscribe((value) => {
      console.log(value);
    });
  }

  myLogin() {
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
