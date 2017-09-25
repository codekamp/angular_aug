import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
  styles: [`
  `]
})
export class DashboardComponent {
  constructor(private route: ActivatedRoute) {

    console.log('url in DashboardComponent is ' + route.snapshot.toString());
  }
}
