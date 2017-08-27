import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <md-card fxLayout="column" fxLayoutAlign="start stretch" fxLayoutGap="30px">
      <h2>Login</h2>
      <md-input-container class="username">
        <input mdInput placeholder="Enter username"/>
      </md-input-container>
      <md-input-container class="password">
        <input mdInput placeholder="Enter password"/>
      </md-input-container>
      <button [color]="'primary'" md-raised-button fxFlexAlign="end" fxFlexAlign.xs="stretch">Login <md-icon>check</md-icon></button>
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

}

// https://github.com/angular/flex-layout/wiki/Using-Angular-CLI
//
// npm uninstall -g @angular/cli
// npm cache clean --force
// npm install -g @angular/cli
