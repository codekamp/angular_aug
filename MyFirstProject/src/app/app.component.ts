import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
  `]
})
export class AppComponent {
  name = 'Angular @codekamp';

  xyz(event: string) {
    console.log('value of selected country is ' + event);
  }

  change() {
    this.name = 'Angular is fun';
  }

}
