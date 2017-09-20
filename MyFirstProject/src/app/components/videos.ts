import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-videos',
  template: `
    <div>
      Video list will go here
    </div>
  `,
  styles: [`
    div {
      height: 300px;
      background: green;
      color: white;
    }
  `],
})
export class VideosComponent implements OnInit, OnChanges {

  @Input() videoType: string;

  count: number;

  constructor(private route: ActivatedRoute) {
    console.log('constructor of VideosComponent called and value of videoType is ' + this.videoType);


    console.log('url in VideosComponent is ' + route.snapshot.toString());
  }

  ngOnInit() {
    console.log('ngOnInit of VideosComponent called and value of videoType is ' + this.videoType)
  }


  ngOnChanges() {
    console.log('ngOnChanges of VideosComponent called and value of videoType is ' + this.videoType)
  }
}
