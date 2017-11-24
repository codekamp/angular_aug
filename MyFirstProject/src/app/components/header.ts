import {Component, OnDestroy, OnInit} from '@angular/core';
import {InvidzService} from '../services/invidz';
import {Store} from '@ngrx/store';
import {getUser, getVideos, State} from '../reducers/index';
import {LoginAction, UserUpdateAction} from '../actions/index';
import {User} from '../models/user';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  template: `
    <div class="navigation" fxLayout="row">
      <img src="../assets/images/logo.png"/>
      <button [ngClass]="{'my-awesome-class': path === 'accounts', 'anotherClass': someCondition}" mat-button>accounts</button>
      <button [ngClass]="{'selected': path === 'ctas'}" mat-button>call to actions</button>
      <button mat-button>videos</button>
      <button mat-button>emails</button>
      <button mat-button>templates</button>
      <span fxFlex="1 1 auto"></span>
      <!--<button (click)="changeUsername()">Change Username</button>-->
      <!--<mat-spinner *ngIf="!user"></mat-spinner>-->
      <button *ngIf="user" mat-button [matMenuTriggerFor]="myMenu">{{name}}
        <mat-icon>keyboard_arrow_down</mat-icon>
      </button>
    </div>
    <mat-menu #myMenu="matMenu" xPosition="after" yPosition="below" [overlapTrigger]="false">
      <button mat-menu-item>
        settings
      </button>
      <button mat-menu-item (click)="logout()">
        logout
      </button>
    </mat-menu>
  `,
  styles: [`
    .navigation {
      background: #333333;
      padding: 15px;
      color: white;
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {

  name = '';
  user: User;

  alive = true;

  constructor(private service: InvidzService, private store: Store<State>) {
  }

  ngOnInit() {
    const user$ = this.store.select(getUser);
    user$.takeWhile(() => this.alive).subscribe((user) => {
      console.log('user profile', user);
      if (!user) {
        this.service.getProfile().subscribe();
        return;
      }
      this.name = user.first_name + ' ' + user.last_name;
      this.user = user;
    });
    const videos$ = this.store.select(getVideos);
    videos$.subscribe((videos) => {
      console.log('event fired on videos$', videos);
    });
  }

  ngOnDestroy() {
    this.alive = false;
  }

  logout() {
    this.service.logout();
  }

  changeUsername() {
    const newUser = {...this.user, ...{first_name: 'Suresh', last_name: 'Prabhu'}};
    this.store.dispatch(new UserUpdateAction(newUser));
  }
}
