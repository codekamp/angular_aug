import {Component, OnInit} from '@angular/core';
import {InvidzService} from '../services/invidz';
import {Video} from 'app/models/video';
import {MdSnackBar} from '@angular/material';
import {AlertService} from '../services/alert';
import {Store} from '@ngrx/store';
import {getVideos, getVideosLoaded, getVideosLoading, State} from '../reducers/index';

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

  loading = true;

  constructor(private service: InvidzService, private alertService: AlertService, private store: Store<State>) {
  }

  ngOnInit() {
    const loading$ = this.store.select(getVideosLoading);
    const loaded$ = this.store.select(getVideosLoaded);
    const videos$ = this.store.select(getVideos);

    loading$.combineLatest(loaded$, videos$, (loading, loaded, videos) => {
      return {loading, loaded, videos};
    }).subscribe(data => {
      this.loading = data.loading;
      this.videos = data.videos;

      if (!data.loading && !data.loaded) {
        this.service.getVideos().subscribe();
      }
    });
  }
}

// https://angular.io/api?type=pipe
