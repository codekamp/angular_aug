import {Component} from '@angular/core';
import {growShrinkAnimation} from './animations/grow-shring';

@Component({
  selector: 'app-codekamp',
  template: `
    <md-card>
      <div></div>
      <button [@growShrink]="divState" md-raised-button color="accent" (click)="this.divState='big'">grow</button>
      <button md-raised-button color="accent" (click)="this.divState='small'">shrink</button>
      <button md-raised-button color="accent" (click)="this.divState='really-big'">really big</button>
    </md-card>
  `
  ,
  styles: [`
    div {
      width: 100px;
      height: 100px;
    }
  `],

  animations: [growShrinkAnimation]
})

export class CodekampComponent {

  divState = 'small';

}
