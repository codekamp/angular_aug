import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
    <!--<app-videos [videoType]="type"></app-videos>-->
    <!--<button md-raised-button (click)="type = 'Comedy'">Comedy Videos</button>-->
    <!--<button md-raised-button (click)="type = 'Action'">Action Videos</button>-->
    <!--<md-input-container>-->
      <!--<input mdInput placeholder="My Text" [value]="myText">-->
    <!--</md-input-container>-->
    <!--<button md-raised-button (click)="change()">change text</button>-->
    <!--<button md-raised-button (click)="read()">read text</button>-->
    <router-outlet></router-outlet>
  `,
  styles: [`
  `]
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {
  name = 'Angular @codekamp';
  type = 'Education';
  myText = 'Hello world!'

  xyz(event: string) {
    console.log('value of selected country is ' + event);
  }

  change() {
    this.myText = 'Angular is fun';
  }

  read() {
    console.log(this.myText);
  }

  constructor(private route: ActivatedRoute) {
    console.log('constructor of AppComponent');

    console.log('url in AppComponent is ' + route.snapshot.toString());
  }

  ngOnInit() {
    console.log('ngOnInit of AppComponent');
  }

  ngOnChanges() {
    console.log('ngOnChanges of AppComponent');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit of AppComponent called');
  }


}
