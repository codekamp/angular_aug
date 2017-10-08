import {Component, OnInit} from '@angular/core';
import {InvidzService} from '../services/invidz';
import {Store} from '@ngrx/store';
import {getUser, getVideos, State} from '../reducers/index';
import {LoginAction, UserUpdateAction} from '../actions/index';
import {User} from '../models/user';

@Component({
  selector: 'app-header',
  template: `
    <div class="navigation" fxLayout="row">
      <img src="../assets/images/logo.png"/>
      <button [ngClass]="{'selected': path === 'accounts', 'anotherClass': someCondition}" md-button>accounts</button>
      <button [ngClass]="{'selected': path === 'ctas'}" md-button>call to actions</button>
      <button md-button>videos</button>
      <button md-button>emails</button>
      <button md-button>templates</button>
      <span fxFlex="1 1 auto"></span>
      <!--<button (click)="changeUsername()">Change Username</button>-->
      <!--<md-spinner *ngIf="!user"></md-spinner>-->
      <button *ngIf="user" md-button [mdMenuTriggerFor]="myMenu">{{name}}
        <md-icon>keyboard_arrow_down</md-icon>
      </button>
    </div>
    <md-menu #myMenu="mdMenu" xPosition="after" yPosition="below" [overlapTrigger]="false">
      <button md-menu-item>
        settings
      </button>
      <button md-menu-item (click)="logout()">
        logout
      </button>
    </md-menu>
  `,
  styles: [`
    .navigation {
      background: #333333;
      padding: 15px;
      color: white;
    }
  `]
})
export class HeaderComponent implements OnInit {

  name = '';
  user: User;

  constructor(private service: InvidzService, private store: Store<State>) {
  }

  ngOnInit() {
    const user$ = this.store.select(getUser);
    user$.subscribe((user) => {
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

  logout() {
    this.service.logout();
  }

  changeUsername() {
    const newUser = {...this.user, ...{first_name: 'Suresh', last_name: 'Prabhu'}};
    this.store.dispatch(new UserUpdateAction(newUser));
  }
}
