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
import {getUser, State} from './reducers/index';
import {Store} from '@ngrx/store';
import {LoginAction} from './actions/index';
import {MatDialog} from '@angular/material';
import {NotFoundComponent} from './components/not-found';
import {ConfirmationComponent} from './components/confirmation';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/takeWhile';
import {StringUtils} from './utils/string';

@Component({
  selector: 'app-login',
  template: `
    <mat-card>
      <h2>Login</h2>
      <form fxLayout="column" fxLayoutAlign="start stretch" fxLayoutGap="30px" [formGroup]="xyz"
            (submit)="xyz.valid && myLogin()">
        <mat-form-field class="username">
          <input [formControlName]="'username'" matInput placeholder="Enter username"/>
          <mat-error>Username is required and should be a valid email</mat-error>
        </mat-form-field>
        <mat-form-field class="password">
          <input formControlName="password" matInput placeholder="Enter password"/>
          <mat-error>Password is required</mat-error>
        </mat-form-field>
        <div fxLayout="row" fxLayoutAlign="end center" fxLayoutGap="15px">
          <mat-spinner *ngIf="loading"></mat-spinner>
          <button [color]="'primary'"
                  mat-raised-button fxFlexAlign="end" fxFlexAlign.xs="stretch">Login
            <mat-icon>check</mat-icon>
          </button>
        </div>
      </form>
    </mat-card>
  `,
  styles: [`

    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content: center;
    }

    mat-card {
      width: 700px;
    }

    mat-spinner {
      width: 24px;
      height: 24px;
    }

    mat-form-field {
      width: 100%;
    }
  `]
})
export class LoginComponent {

  xyz: FormGroup;
  loading = false;

  constructor(private service: InvidzService, private router: Router, private dialog: MatDialog, private store: Store<State>) {

    this.xyz = new FormGroup({
      username: new FormControl(null),
      password: new FormControl()
    });
  }

  myLogin() {

    // const dialogRef = this.dialog.open(ConfirmationComponent, {
    //   disableClose: true,
    //   data: {message: 'Are you sure you want to delete this video?', okText: 'Delete'}
    // });
    // // dialogRef.updateSize('60%', '80%');
    // //
    // // dialogRef.componentInstance.message = 'Are you sure you want to delete this video?';
    //
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     console.log('delete the item');
    //   } else {
    //     console.log('cancel delete');
    //   }
    // });


    this.loading = true;
    this.service.login(this.xyz.get('username').value, this.xyz.get('password').value)
      .subscribe(
        (user) => {
          this.loading = false;
          this.router.navigate(['dashboard', 'videos']);
        },
        (error) => {
          console.log(error.json());
          this.loading = false
        }
      );
  }
}
