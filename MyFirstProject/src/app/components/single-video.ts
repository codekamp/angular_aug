import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {getVideo, State} from '../reducers/index';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-singel-video',
  template: `
    <div>
      Title: my video number {{id}}
      <button md-raised-button (click)="nextVideo()" color="primary">Next</button>
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
export class SingleVideoComponent implements OnDestroy {

  id: number;
  alive = true;
  // videoSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<State>) {


    route.paramMap.takeWhile(() => this.alive).subscribe(params => {
      this.id = +params.get('videoId');

      // if (this.videoSubscription) {
      //   this.videoSubscription.unsubscribe();
      // }
      //
      // this.videoSubscription = this.store.select(state => getVideo(state, this.id))
      //   .takeWhile(() => this.alive).subscribe(video => {
      //   });
    });

    this.store.select(state => getVideo(state, this.id))
      .takeWhile(() => this.alive).subscribe(video => {
    });
  }

  nextVideo() {
    this.router.navigate(['dashboard', 'videos', this.id + 1]);
  }

  ngOnDestroy() {
    this.alive = false;
  }

}
