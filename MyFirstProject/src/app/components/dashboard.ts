import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

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
  constructor(private route: ActivatedRoute) {

    console.log('url in DashboardComponent is ' + route.snapshot.toString());
  }
}
