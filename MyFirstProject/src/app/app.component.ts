import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
