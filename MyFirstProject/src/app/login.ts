import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-login',
  template: `
    <md-card fxLayout="column" fxLayoutAlign="start stretch" fxLayoutGap="30px">
      <h2>Login</h2>
      <md-input-container class="username" [formGroup]="xyz">
        <input [formControlName]="'hello'" mdInput placeholder="Enter username"/>
        <md-error>Username is required and should be a valid email</md-error>
      </md-input-container>
      <md-input-container class="password" [formGroup]="xyz">
        <input [formControlName]="'world'" mdInput placeholder="Enter password"/>
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

  xyz = new FormGroup({
    hello: new FormControl(null, [Validators.required, Validators.email]),
    world: new FormControl()
  });

  constructor() {
    this.xyz.valueChanges.map((value) => value.hello).debounceTime(2000).distinctUntilChanged()
      .subscribe(this.doSomething, (error) => console.log(error));
  }

  myLogin() {
    console.log(this.xyz.value);
    console.log(this.xyz.value.hello);
  }

  doSomething(data: any) {
    console.log(data);
  }
}
