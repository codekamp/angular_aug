import {Component, OnInit} from '@angular/core';
import {InvidzService} from '../services/invidz';

@Component({
  selector: 'app-header',
  template: `
    <div class="navigation" fxLayout="row">
      <img src="../assets/images/logo.png"/>
      <button md-button>accounts</button>
      <button md-button>call to actions</button>
      <button md-button>videos</button>
      <button md-button>emails</button>
      <button md-button>templates</button>
      <span fxFlex="1 1 auto"></span>
      <button md-button [mdMenuTriggerFor]="myMenu">{{name}}
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

  name = 'Gabbar';

  constructor(private service: InvidzService) {
  }

  ngOnInit() {
    this.service.getProfile().subscribe((user) => {
      this.name = user.first_name + ' ' + user.last_name;
    });
  }

  logout() {
    this.service.logout();
  }
}
