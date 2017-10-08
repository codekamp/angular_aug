import {Injectable} from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Injectable()
export class AlertService {

  constructor(private snackbar: MdSnackBar) {
  }

  success(message: string, duration: number = 3000) {
    this.snackbar.open(message, null, {
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      extraClasses: ['success-alert']
    });
  }

  error(message: string, duration: number = 3000) {
    this.snackbar.open(message, null, {
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      extraClasses: ['error-alert']
    });
  }
}
