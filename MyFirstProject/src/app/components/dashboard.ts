import {Component} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="navigation">HEADER NAVIGATION</div>
    <router-outlet></router-outlet>
    <div class="navigation">FOOTER NAVIGATION</div>
  `,
  styles: [`
    .navigation {
      height: 100px;
      background: red;
    }
  `]
})
export class DashboardComponent {

}
