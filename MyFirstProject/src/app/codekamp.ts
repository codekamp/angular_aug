import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MdSliderChange} from '@angular/material';

@Component({
  selector: 'app-codekamp',
  template: `
    <md-card>
      <span>Created by:</span>
      <h3>{{createdBy}}</h3>
      <button md-raised-button [color]="'primary'" (click)="onYes()">Yes</button>
      <button md-raised-button [color]="'accent'" (click)="onCancel()">Cancel</button>
      <md-slider
        style="width: 500px;"
        [invert]="false"
        [max]="100"
        [min]="0"
        [step]="2"
        [thumb-label]="true"
        [value]="90"
        [vertical]="false"
        (change)="myAwesomeFunction($event)"
      >
      </md-slider>
    </md-card>
  `
  ,
  styles: [`
    span {
      color: #bbbbbb;
    }

    h3 {
      color: red;
    }
  `]
})

export class CodekampComponent {
  @Input() createdBy: string;
  @Output() onConfirm = new EventEmitter<string>();

  constructor() {
  }

  onYes() {
    this.createdBy = 'Some random value';
    this.onConfirm.next('India');
  }

  onCancel() {
    console.log('cancel button clicked');
  }

  myAwesomeFunction(input: MdSliderChange) {
    console.log(input.value);
  }
}
