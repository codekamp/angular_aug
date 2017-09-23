import {Component, OnInit} from '@angular/core';
import {InvidzService} from '../services/invidz';
import {Video} from 'app/models/video';

@Component({
  selector: 'app-videos',
  template: `
    <md-spinner *ngIf="loading"></md-spinner>
    <div fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="center">
      <md-card *ngFor="let video of videos" fxLayout="column">
        <img [src]="video.thumbnail" width="202px">
        <h3>{{video.title | truncate}}</h3>
      </md-card>
      <span *appFlexAlignmentHack></span>
    </div>
  `,
  styles: [`
    md-card, span {
      width: 250px;
      margin: 15px 10px;
    }

    span {
      font-size: 100px;
    }
  `],
})
export class VideosComponent implements OnInit {

  videos: Video[] = [];

  loading = false;

  constructor(private service: InvidzService) {
  }

  ngOnInit() {
    this.loading = true;
    this.service.getVideos().subscribe((videos) => {
      this.videos = videos;
      this.loading = false;
    });

    console.log(this.loading);
  }
}

// https://angular.io/api?type=pipe
