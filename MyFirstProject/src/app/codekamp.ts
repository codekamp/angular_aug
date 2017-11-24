import {Component} from '@angular/core';
import {growShrinkAnimation} from './animations/grow-shring';

@Component({
  selector: 'app-codekamp',
  template: `
    <mat-card>
      <div></div>
      <button [@growShrink]="divState" mat-raised-button color="accent" (click)="this.divState='big'">grow</button>
      <button mat-raised-button color="accent" (click)="this.divState='small'">shrink</button>
      <button mat-raised-button color="accent" (click)="this.divState='really-big'">really big</button>
    </mat-card>
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
