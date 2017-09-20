import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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
export class SingleVideoComponent {

  id: number;

  constructor(private route: ActivatedRoute, private router: Router) {
    route.paramMap.subscribe((xyz) => {
      this.id = parseInt(xyz.get('videoId'), 10);
      console.log('subscribe called');
    });
    console.log('constructor of SingleVideoComponent called');
  }

  nextVideo() {
    this.router.navigate(['dashboard', 'videos', this.id + 1]);
  }
}
