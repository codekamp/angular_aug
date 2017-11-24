import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirmation',
  template: `
    <div contenteditable="true">
      <h2>{{message}}</h2>
      <button mat-raised-button color="accent" (click)="ok()">{{okText}}</button>
      <button mat-raised-button color="primary" (click)="cancel()">cancel</button>
    </div>
  `,
  styles: []
})
export class ConfirmationComponent {

  message = 'are you sure?';
  okText = 'ok';

  constructor(private dialogRef: MatDialogRef<ConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data: ConfirmationData) {
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
