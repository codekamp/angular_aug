import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/from';
import {InvidzService} from './services/invidz';

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

  constructor(private service: InvidzService) {

    this.xyz = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl()
    });
  }

  myLogin() {
    const output = this.service.login(this.xyz.get('username').value, this.xyz.get('password').value);

    output.subscribe(
      (value) => console.log(value.json()),
      (error) => console.log(error.json())
    );
    console.log('hello world!')
  }
}
