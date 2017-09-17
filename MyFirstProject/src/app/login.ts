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
import {Router} from '@angular/router';

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
      <div fxLayout="row" fxLayoutAlign="end center" fxLayoutGap="15px">
        <md-spinner *ngIf="loading"></md-spinner>
        <button [color]="'primary'" (click)="myLogin()"
                md-raised-button fxFlexAlign="end" fxFlexAlign.xs="stretch">Login
          <md-icon>check</md-icon>
        </button>
      </div>
    </md-card>
  `,
  styles: [`
    md-card {
      width: 700px;
      height: 600px;
    }

    md-spinner {
      width: 24px;
      height: 24px;
    }
  `]
})
export class LoginComponent {

  xyz: FormGroup;
  loading = false;

  constructor(private service: InvidzService, private router: Router) {

    this.xyz = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl()
    });
  }

  myLogin() {
    this.loading = true;
    const output = this.service.login(this.xyz.get('username').value, this.xyz.get('password').value);

    output.subscribe(
      (value) => {
        const response = value.json();
        localStorage.setItem('my_login_token', response.token);
        console.log(response.user.first_name);
        this.loading = false;
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error.json());
        this.loading = false
      }
    );
    console
      .log(
        'hello world!'
      )
  }
}
