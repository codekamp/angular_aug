import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirmation',
  template: `
    <div contenteditable="true">
      <h2>{{message}}</h2>
      <button md-raised-button color="accent" (click)="ok()">{{okText}}</button>
      <button md-raised-button color="primary" (click)="cancel()">cancel</button>
    </div>
  `,
  styles: []
})
export class ConfirmationComponent {

  message = 'are you sure?';
  okText = 'ok';

  constructor(private dialogRef: MdDialogRef<ConfirmationComponent>, @Inject(MD_DIALOG_DATA) public data: ConfirmationData) {
    if (data && data.message) {
      this.message = data.message;
    }

    if (data && data.okText) {
      this.okText = data.okText;
    }


  }

  ok() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
}

export interface ConfirmationData {
  message?: string;
  okText?: string;
}
