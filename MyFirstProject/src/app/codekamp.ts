import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-codekamp',
  template: `<span>Created by:</span>
  <h3>{{createdBy}}</h3>
  <button class="danger" (click)="onYes()">Yes</button>
  <button class="normal" (click)="onCancel()">Cancel</button>
  `
  ,
  styles: [`
    span {
      color: #bbbbbb;
    }

    h3 {
      color: red;
    }

    .danger {
      color: red;
    }

    .normal {
      color: grey;
    }
  `]
})

export class CodekampComponent {
  @Input() createdBy: string;
  @Output() onConfirm = new EventEmitter<string>();

  constructor() {
  }

  onYes() {
    this.onConfirm.next('India');
  }

  onCancel() {
    console.log('cancel button clicked');
  }
}
